import Navbar from './components/Navbar';
import Main from './components/Main';
import styled from 'styled-components';
import Feature from './components/Feature';
import {
  css
} from 'styled-components';
import AnimatedShape from './components/AnimatedShape';
const Container = styled.div`
  height: 100vh;
  /* overflow: hidden; */
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
`;

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

  </>);
}

export default App;