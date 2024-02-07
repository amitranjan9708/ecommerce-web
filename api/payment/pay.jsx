import React from 'react'
import styled from "styled-components";
const Button=styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: black ;
`

const pay = () => {
  return (
    <>
    <Button>pay now</Button>
    </>
  )   
}

export default pay