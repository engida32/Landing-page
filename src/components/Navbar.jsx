import React from 'react';
 import { Box, createTheme } from '@mui/material';
import {styled   } from '@mui/system';
const Container =styled(
  Box,
  {}
)({
  height: '100px',
});
const SWrapper =styled(
  Box,
  {}
)({
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItem: 'center',
  background: 'linear-gradient(99deg, white 0%, #ebf08b 100%)'

});
 
const SLeft =styled(
  Box,
  {}
)({
  width: '60%',
  alignItem: 'center',
  display: 'flex',
  justifyContent: 'space-between',
 
});
 
const SMenu =styled(
  'ul',
  {}
)({
  display: 'flex',
  listStyle: 'none',
});
 

const SMenuItem=styled('li',{})({
    marginRight:'32px',
    fontSize:'25px',
    fontWeight:800,
    color:'black',
    cursor:'pointer',
    backgroundColor:'transparent',
    '&:hover': {
        backgroundColor: '#ccfffc',    
        border:'none',
        borderRadius:'10px',
        transform: 'translate(-10%, -10%)',
         
        }
});
 
const SLogo=styled('div',{})({
    fontSize:'37px',
    fontWeight:'italic',
    fontFamily:'Playfair Display',
    cursor:'pointer',
    backgroundColor:'transparent',
    '&:hover': {
        backgroundColor: '#ccfffc',    
        border:'none',
        borderRadius:'6px',
        padding:'5px 4px 10px 2px',
     
        }
});
 
const SButton=styled('button',{})({
    border:' 2px solid gray',
    width: '150px',
    height: '60px',
    zIndex: 1,
    marginBottom: '4px',
    alignSelf: 'flex-end',
    backgroundColor: 'blueviolet',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '10px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'lightgray',    
 
                     
        }
}); 
const Navbar = () => {
  const theme = createTheme();
  return (
    <Container>
      <SWrapper>
        <SLeft sx={{}}>
          <SLogo>HOME</SLogo>
          <SMenu
            sx={{
              [theme.breakpoints.down('md')]: {
                display: 'none',
              },
            }}
          >
            <SMenuItem>Home</SMenuItem>
            <SMenuItem>Features</SMenuItem>
            <SMenuItem>Service</SMenuItem>
            <SMenuItem>Pricing</SMenuItem>
            <SMenuItem>Contact</SMenuItem>
          </SMenu>
        </SLeft>

        <SButton>JOIN US</SButton>
      </SWrapper>
    </Container>
  );
};

export default Navbar;
