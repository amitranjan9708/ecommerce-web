import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector} from "react-redux";

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
   flex:1;
   display: flex;
   align-items:center;
`;

const Language = styled.span`
    font-size:14;
    cursor:pointer;
`;

const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display: flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`;

const Input = styled.input`
    border:none;
`;

const Center = styled.div`
    flex:1;
    text-align:center;
`;

const logoAnimation = keyframes`
    0% { transform: rotateY(0deg); }
    50% { transform: rotateY(180deg); }
    100% { transform: rotateY(360deg); }
`;

const LogoLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Logo = styled.h1`
    font-weight: bold;
    animation: ${logoAnimation} 5s infinite linear; /* Adjust the duration and animation type as needed */
`;

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
`;

const MenuItem = styled.div`
    font-size:14;
    cursor:pointer;
    margin-left:25px;
`;

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity);

  
   

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <SearchIcon style={{color:"gray",fontSize:16}}></SearchIcon>
                    </SearchContainer>
                </Left>
                <Center>
                    <LogoLink to="http://localhost:5173/">
                        <Logo>AMIT.</Logo>
                    </LogoLink>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <Link to="/cart" >
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
