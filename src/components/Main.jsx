/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import AnimatedShape from './AnimatedShape';
import desktop from '../asset/img/pc-desktop.jpg';
import { styled as Styled } from '@mui/system';
import { Box, Button } from '@mui/material';
import { theme } from '../theme/theme';
import { Typography } from '@mui/material';
const Container = Styled(
  Box,
  {}
)({
  height: 'calc( 100vh - 60px)',
  display: 'flex',
});
const Left2 = styled(
  Box,
  {}
)({
  width: '60%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
});

const Title2 = styled(
  'h1',
  {}
)({
  width: '60%',
  fontSize: '60px',
});

const Description = styled(
  'p',
  {}
)({
  marginTop: '20px',
  width: '60%',
  fontSize: '20px',
  display: 'flex',
});
const Info = styled(
  Box,
  {}
)({
  width: '60%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '50px',
});

// const Info = styled.div`
//   width: 60%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 50px;
//   @media only screen and (max-width: 480px) {
//     /* font-size: 20px; */
//     width: 100%;
//     flex-direction: column;
//   }
// `;
const StyledButton = styled(
  Button,
  {}
)({
  width: '150px',
  height: '80px',
  padding: '22px',
  border: 'none',
  wordSpacing: '3px',

  fontWeight: 900,
});

const Contact = styled(
  Box,
  {}
)({
  display: 'flex',
  flexDirection: 'column',
});

const Span = styled(Typography, {})({});

const Right = styled(
  Box,
  {}
)({
  display:'flex',
  width: '60%',
  alignItems: 'center',
  alignContent: 'center',
});
 
const ImageContainer=styled('img',{})({
  background: 'linear-gradient(139deg,rgba(242, 230, 218, 0.5) 0%,#eba08b 100%)',
  borderBottomLeftRadius:'22%',
  bsckgroundColor:'white',
  alignItems:'center',
  alignContent:'center',
  width:'99%',
  height:'100%'
});

 

const Main = () => {
  return (
    <Container
      sx={{
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
        },
      }}
    >
      <Left2 variant="h1">
        <Title2
          sx={{
            [theme.breakpoints.down('md')]: {
              fontSize: '40px',
              width: '100%',
              m: 1,
            },
          }}
        >
          ADVENTURE IN CREATIVE AGE
        </Title2>
        <Description
        sx={{
          [theme.breakpoints.only('md')]: {
            width: '100%',
            backgroundColor:'red'

          },
        }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          nemo sunt necessitatibus error quibusdam aspernatur quos ex enim neque
          aut.
        </Description>
        <Info
          sx={{
            [theme.breakpoints.down('md')]: {
              width: '100%',
              flexDirection: 'column',
              backgroundColor: 'red',
            },
          }}
        >
          <StyledButton
            sx={{
              backgroundColor: 'blueviolet',
              color: 'black',
              borderRadius: '20px',
              ' &:hover': {
                backgroundColor: 'gray',
              },
            }}
          >
            {' '}
            Start Project{' '}
          </StyledButton>
          <Contact>
            <Span
              sx={{
                fontWeight: 900,
                textDecoration: 'underline blue',
                fontSize: '22px',
                color: 'green',
              }}
            >
              Call us (012) 345-6789
            </Span>
            <Span
              sx={{
                color: 'rebeccapurple',
                mt: '5px',
              }}
            >
              For any Question or concerns{' '}
            </Span>
          </Contact>
        </Info>
      </Left2>
      <Right
        sx={{
          [theme.breakpoints.down('md')]: {
            display: 'none',
 
          },
        }}
      >
        <ImageContainer src={desktop} />
      </Right>
      <AnimatedShape />
    </Container>
  );
};
export default Main;
