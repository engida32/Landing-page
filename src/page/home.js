import React from 'react';
import Footer from '../components/Footer';
// import Footer from '././components/Footer';
 import Navbar from '../components/Navbar';
import Main from '../components/Main';
import styled from 'styled-components';
import { css } from 'styled-components';
import Price from '../components/Price';

import Feature from '../components/Feature';
import Service from '../components/Service';
import Contact from '../components/Contact';
import { theme } from '../theme/theme';
const Container = styled.div`
 
  height: 100vh;
 max-width:100vw;
  // overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(29% 0, 100% 0, 100% 87%, 55% 100%);
  background-color: #3333;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: pink;
  height: 100%;
`;
const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  /* height: 40%; */
  background-color: pink;
  display: none;
`;
const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon( 33% 0, 100% 0%, 100% 100%,67% 100%);
  background-color: crimson;
`;
const Title = styled.h1`
  font-size: 42px;
  color: darkblue;
  padding-left: 201px;
  text-decoration: solid underline cadetblue 8px;
`;

const smallScreen = window.screen.width <= 480 ? true : false;
const Home = () => {
  return (
    <>
    <Container>
          <Navbar />
          <Main />
          <IntoShape />
        </Container>
        <Container id="feature">
          <Feature />
          <FeatureShape />
        </Container>
        <Container id="service">
          <Service />
          {!smallScreen && <ServiceShape />}
        </Container>
        <Container id="price">
          <Title
            sx={{
              [theme.breakpoints.down('sm')]: {
                fontSize: '20px',
                color:'dark'
              },
            }}
          >
            CHOOSE YOUR PLAN 
          </Title>
          <Price />
          <PriceShape />
        </Container>
        <Container id="contact">
          <Contact />
        </Container>

        <Footer />
    </>
  );
};

export default Home;