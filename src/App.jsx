/* eslint-disable react/react-in-jsx-scope */
import Navbar from './components/Navbar';
import Main from './components/Main';
import styled from 'styled-components';
import Feature from './components/Feature';
import { css } from 'styled-components';
import Service from './components/Service';
import Price from './components/Price';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { theme } from './theme/theme';


import { BrowserRouter, Routes, Route } from 'react-router-dom'; // import { useRef } from 'react';
const Container = styled.div`import { theme } from './theme/theme';

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
function App(props) {
  // const scrollDownF = () => {
  //     window.scrollTo({
  //       top: featureSectcion.current.offsetTop,
  //       behavior: 'smooth',
  //     });
  //   };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="feature" element={<Feature />} />
          <Route path="Service" element={<Service />} />
          <Route path="about" element={<Contact />} />
        </Routes>

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
      </BrowserRouter>
    </>
  );
}

export default App;
