import React from 'react';
// import styled from 'styled-components';
import PriceCard from './PriceCard';
import { styled } from '@mui/system';
import { theme } from '../theme/theme';
import { createTheme } from '@mui/material';
const Container = styled(
  'div',
  {}
)({
  // maxHeight: '100%',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: '20px',
  ml: '20px',
  // @media only screen and (max-width:480px) {
  //     flex-direction: column;
  //     height:70%

  // }
  [createTheme().breakpoints.down('md')]: {
    flexDirection: 'column',
      maxHeight:'70%'
  },
});
const Price = () => {
  return (
    <Container
      sx={{
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
          margin:'5px',
          mr: 0,
          p:'10px',
          // mb:'10px'
        },
      }}
    >
      <PriceCard price="10" type="Basic" />
      <PriceCard price="20" type="Premium" />
      <PriceCard price="30" type="Advanced" />
    </Container>
  );
};

export default Price;
