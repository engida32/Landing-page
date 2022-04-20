/* eslint-disable react/prop-types */
import React from 'react';
import {styled} from '@mui/system';
// import { styled } from '@mui/system';
import { theme } from '../theme/theme';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { createTheme } from '@mui/material';

const Container = styled(
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
 
 
  
    [createTheme().breakpoints.down('md')]: {
      marginRight: 0,
          marginBottom: '10px',
           padding: '10px',
          // minHeight: '80%'
    },
 
});
const PriceContainer = styled(
  Box,
  {}
)({
  display: 'flex',
  alignItems: 'center',
});
const Price = styled(
  'span',
  {}
)({
  fontWeight: 'bold',
  fontSize: '50px',
});
const Type = styled(
  
  'button',
  {}
)({
  padding: '10px',
  display:'flex',
  margin: '10px',
  border: '1.5px solid crimson',
  color: 'crimson',
  backgroundolor: 'white',
  borderRadius: '20px',
  [createTheme().breakpoints.down('md')]: {
  display:'none'
  },
});
const List = styled(
  'ul',
  {}
)({
  listStyle: ' none',
});

const ListItem = styled(
  'li',
  {}
)({
  margin: '30px 0',
  // @media only screen and (max-width: 480px) {
  //   margin: 10px;
  //   font-size: 10px;
  // }
  [createTheme().breakpoints.down('md')]: {
     margin:' 10px',
   fontSize: '10px'
    },
});

const MButton = styled(
  Button,
  {}
)({
  border: 'none',
  backgroundColor: 'darkblue',
  color: 'white',
  fontSize: '16px',
  borderRadius: '10px',
  padding: '15px',
  cursor: 'pointer',
  fontWeight: 'bold',
  // @media only screen and (max-width: 480px) {
  //   font-size: 8px;
  //   padding: 8px;
  // }
});

const PriceCard = ({ price, type }) => {
  return (
    <>
      <Container
        sx={{
          [createTheme().breakpoints.down('md ')]: {
            maxHeight: '80%',
            mr: 0,
            mb: '10px',
            p: '10px',
            // overflowY:'scroll'
          },
        }}
      >
        <PriceContainer>
          $
          <Price
            sx={{
              [theme.breakpoints.down('md')]: {
                fontSize: '20px',
              },
            }}
          >
            {price}
          </Price>
          <b>/month</b>
        </PriceContainer>
        <Type
          sx={{
            [theme.breakpoints.down('md')]: {
              // backgroundColor:'red'
              //TODO: display should be non
              //FIXME:  - fix on small screen
              //TO should be display to none on small screen
            },
          }}
        >
          {type} Plan
        </Type>
        <List>
          <ListItem
            sx={{
              [theme.breakpoints.down('md')]: {
                fontSize: '10px',
                margin: '10px',
              },
            }}
          >
            200 Hand crafted Template
          </ListItem>
          <ListItem
            sx={{
              [theme.breakpoints.down('md')]: {
                fontSize: '10px',
                margin: '10px',
              },
            }}
          >
            Exclusive Support
          </ListItem>
          <ListItem
            sx={{
              [theme.breakpoints.down('md')]: {
                fontSize: '10px',
                margin: '10px',
              },
            }}
          >
            50+ Prebuilt Website
          </ListItem>
          <ListItem
            sx={{
              [theme.breakpoints.down('md')]: {
                fontSize: '10px',
                margin: '10px',
              },
            }}
          >
            Premium Plugin
          </ListItem>
        </List>
        <MButton
          sx={{
            [theme.breakpoints.down('md')]: {
              fontSize: '8px',
              paading: '5px',
            },
          }}
        >
          Join Now
        </MButton>
      </Container>
    </>
  );
};

export default PriceCard;
