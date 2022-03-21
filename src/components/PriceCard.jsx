import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
margin-right: 50px;
-webkit-box-shadow: -5px 1px 17px 22px #838372;
box-shadow: -5px 1px 27px 12px #85856B;
background-color: white;
border-radius:10px;
display: flex;
flex-direction: column ;
align-items: center;
padding: 20px;
`
const PriceContainer = styled.div`
display: flex;
align-items: center;
`
const Price = styled.span`
font-weight: bold;
font-size: 50px;
`
const Type = styled.button`
padding: 10px;
margin: 10px;
border:1.5px solid crimson;
color: crimson;
background-color:white;
border-radius:20px;
`
const List = styled.ul`
list-style: none;
`
const ListItem = styled.li`
margin: 30px 0;`
const Button = styled.button`
border: none ;
background-color: darkblue;
color: white;
font-size: 16px;
border-radius: 10px;
padding:15px;
cursor: pointer;
font-weight: bold;
`
const PriceCard = ({ price, type }) => {
    return (
        <Container>
            <PriceContainer>
                $<Price>{price}</Price><b>/month</b>
            </PriceContainer>
            <Type>{type} Plan</Type>
            <List>
                <ListItem>200 Hand crafted Template</ListItem>
                <ListItem>Exclusive Support</ListItem>
                <ListItem>50+ Prebuilt  Website </ListItem>
                <ListItem>Premium Plugin </ListItem>
            </List>
            <Button> Join Now</Button>

        </Container>
    )
}

export default PriceCard