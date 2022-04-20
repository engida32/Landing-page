/* eslint-disable react/react-in-jsx-scope */

import Feature from './components/Feature';
import Service from './components/Service';
import Contact from './components/Contact';


import { BrowserRouter, Routes, Route } from 'react-router-dom'; // import { useRef } from 'react';
import Home from './page/home';

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
          <Route path="/" element={<Home />} />
          <Route path="feature" element={<Feature />} />
          <Route path="Service" element={<Service />} />
          <Route path="about" element={<Contact />} />
        </Routes>

        
      </BrowserRouter>
    </>
  );
}

export default App;
