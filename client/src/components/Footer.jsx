
import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
const Container=styled.div`
    display: flex;
`
const Left=styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    padding: 20px;

`
const Logo=styled.h1`
    
`
const Desc=styled.p`
    margin: 20px 0px;

    
`
const SocialContainer=styled.div`
    display: flex;
`
const SocialIcon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center=styled.div`
    flex:1;
    padding: 20px;
`
const Title=styled.h3`
    margin-bottom: 20px;
`
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem=styled.li`
    width:50%;
    margin-bottom:10px;
`
const Right=styled.div`
    flex:1;
    padding: 20px;
`
const ContactItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment=styled.img`
    width:100%;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                Amit.
            </Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tenetur, porro reprehenderit ipsam, nesciunt tempora debitis d
                olore praesentium quisquam ab maxime eius, sint facere d
                istinctio molestias blanditiis. Mollitia quaerat, tempora, 
                quam, in explicabo aperiam quod non ipsam libero atque impedit accusamus.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <PinterestIcon/>
                </SocialIcon>
            </SocialContainer>
            
        </Left>
        <Center>
            <Title>Useful Items</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>

            </List>
        </Center>
        <Right>
            <Title></Title>
            <ContactItem>
                <PlaceIcon style={{marginRight:"20px"}}/>
                IIIT RANCHI, Science & Technology Campus, Ranchi-834010
            </ContactItem>
            <ContactItem>
                <LocalPhoneIcon style={{marginRight:"20px"}}/>
                +91 12345678
            </ContactItem>
            <ContactItem>
                <EmailIcon style={{marginRight:"20px"}}/>
                contact@abc.com
            </ContactItem>
            <Payment src="https://www.pngmart.com/files/7/Payment-Background-PNG.png" />
        </Right>
    </Container>
  )
}

export default Footer