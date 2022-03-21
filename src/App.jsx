import Navbar from './components/Navbar';
import Main from './components/Main';
import styled from 'styled-components';
import Feature from './components/Feature';
import { css } from 'styled-components';
import Service from './components/Service';
import Price from './components/Price';
import Contact from './components/Contact';
import Footer from './components/Footer';
const Container = styled.div`
  height: 100vh;
/* margin: 0; */
  overflow: hidden;
  /* padding-top:0px; */
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
  color: crimson;

`
function App() {
  return (<>

    <Container>
      <Navbar />
      <Main />
      <IntoShape />
    </Container>
    <Container>
      <Feature />
      <FeatureShape />

    </Container>
    <Container>
      <Service />
      <ServiceShape />
    </Container>
    <Container>
      <Title>CHOOSE YOUR PLAN </Title>
      <Price />
      <PriceShape />
    </Container>
    <Container>
      <Contact />
      <Footer />
    </Container>
  </>);
}

export default App;