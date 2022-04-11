import { ArrowUpwardOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { goToTop } from '../scrollTo';
 const Container = styled('div',{})({
   height: '10vh',
   backgroundColor: '#333',
   color: 'lightgray'
    
  });
const Wrapper = styled('div',{})({
  
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
 
});
const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;
const ListItem = styled.li`
  margin-right: 20px;
`;
const Copyright = styled.span`
  margin-right: 10px;

  @media only screen and (max-width: 480px) {
    margin-right: 10px;
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
  <IconButton onClick={goToTop}>

          <ArrowUpwardOutlined 
            sx={{
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '18px',
                fontSize: '50px',
                cursor:'pointer',
                '&:hover': {
                  backgroundColor: '#ccfffc',    
                  border:'none',
                  borderRadius:'10px',
                  transform: 'translate(10%, 10%)',
                   
                  }
            }}
            />
            </IconButton>
             
        <Copyright>Public</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
