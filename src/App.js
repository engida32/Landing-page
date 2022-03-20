import Navbar from './components/Navbar';
import Main from './components/Main';
import styled from 'styled-components';

const Container = styled.div`
height: 100vh;
overflow: hidden;
/* background: #000; */
`
const Introshape = styled.div`
overflow: hidden;
width: 100%;
height: 100%;
top:0;
left:0;
position: absolute;
clip-path: polygon(107% 0%, 30% 90%, 0% 100%, 57% 100%, 40% 54%, 28% 0%);
background-color: #3233;
z-index: -1;

`
function App() {
  return (
    <Container>
      <Navbar />
      <Main />
      <Introshape />
    </Container>
  );
}

export default App;
