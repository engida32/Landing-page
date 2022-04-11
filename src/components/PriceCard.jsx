/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { styled as styled2 } from '@mui/system';
import { theme } from '../theme/theme';
import { Box } from '@mui/material';

const Container = styled2(
  Box,
  {}
)({
  marginRight: '50px',
  boxShadow: '-5px 1px 27px 12px #85856B',
  backgroundColor: 'white',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',

  // @media only screen and (max-width:480px) {
  //     margin-right: 0;
  //     margin-bottom: 10px;
  //     padding: 10px;
  //     height: 80%;

  // }
});
const PriceContainer = styled2('box',{})({
    
    display: 'flex',
    alignItems: 'center'

});
const Price = styled2('span',{})({

    fontWeight: 'bold',
    fontSize: '50px'
    // @media only screen and (max-width: 480px) {
    //     font-size: 20px;
    // }
   
});
const Type = styled('button',{})({

    padding: '10px',
    margin: '10px',
    border: '1.5px solid crimson',
    color: 'crimson',
    backgroundolor: 'white',
    borderRadius: '20px'
    // @media only screen and (max-width: 480px) {
    //     display: none;
    // }
    
});
const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  margin: 30px 0;
  @media only screen and (max-width: 480px) {
    margin: 10px;
    font-size: 10px;
  }
`;
const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 16px;
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  @media only screen and (max-width: 480px) {
    font-size: 8px;
    padding: 8px;
  }
`;

const PriceCard = ({ price, type }) => {
  return (
    <>
      <Container
        sx={{
          [theme.breakpoints.down('md')]: {
           height:'80%',
            mr: 0,
            mb: '10px',
             p: '10px',
            // overflowY:'scroll'
          },
        }}
      >
        <PriceContainer>
          $<Price
          sx={{
            [theme.breakpoints.down('sm')]: {
          fontSize:'20px'
              },
          }}
          
          >{price}</Price>
          <b>/month</b>
        </PriceContainer>
        <Type>{type} Plan</Type>
        <List>
          <ListItem>200 Hand crafted Template</ListItem>
          <ListItem>Exclusive Support</ListItem>
          <ListItem>50+ Prebuilt Website </ListItem>
          <ListItem>Premium Plugin </ListItem>
        </List>
        <Button> Join Now</Button>
      </Container>
    </>
  );
};

export default PriceCard;
