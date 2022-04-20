/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import mac from '../asset/img/eyeglasses.png';
import MiniCard from './MiniCard';
import PlayIcon from '../asset/play.png';
import { styled  } from '@mui/system';
import { theme } from '../theme/theme';
import { Typography } from '@mui/material';
import { createTheme } from '@mui/material';
const Container = styled(
  'div',
  {}
)({
 
  display: 'flex',
  maxHeight:'100%',
  // @media only screen and (max-width:480px) {
  //     flex-direction: column;
  // }`;
   
    [createTheme().breakpoints.down('md')]: {
      flexDirection: 'column'
    },
 
});
const Left = styled(
  'div',
  {}
)({
  minWidth: '50%',
  position: 'relative',
  // @media only screen and (max-width:480px) {
  //     display:none;
  // }
});
const Right = styled(
  'div',
  {}
)({
  minWidth: '50%',
  // @media only screen and (max-width:480px) {
  //     width: 100%;
  // }
   
    [createTheme().breakpoints.down('md')]: {
      minWidth: '100%',
      // backgroundColor:'red',
    },
 
});
const Image = styled(
  'img',
  {}
)({
  display: `${(props) => props.open && 'none'}`,
  marginTop: ' 21px',
  maxHeight: '100%',
  maxWidth: '100%',
});
const Wrapper = styled(
  'div',
  {}
)({
  padding: '50px',
  display: 'flex',
  flexDirection: 'column',  
  // @media only screen and (max-width:480px) {
  //     padding: 20px;
  //     width: 100%;
  // }
     [theme.breakpoints.down('md')]: {
      padding: '20px',  
      minWidth: '100%'
    },
 
});
const Title = styled(Typography, {})({});
const Desc = styled(
  'p',
  {}
)({
  fontSize: '20px',
  marginTop: '20px',
  color: '#555',
});
const Icon = styled(
  'img',
  {}
)({
  width: '20px',
  marginRight: '10px',
});
const CardContainer = styled(
  'div',
  {}
)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '50px',
});
const Button = styled(
  'button',
  {}
)({
  maxWidth: '180px',
  bottom: 'none',
  borderRadius: '10px',
  backgroundColor: 'darkblue',
  color: 'white',
  fontSize: '20px',
  marginTop: '50px',
  display: 'flex',
  alignItems: ' center',
  cursor: 'pointer',
});
const Video = styled(
  'video',
  {}
)({
  display: `${(props) => !props.open && 'none'}`,
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  margin: 'auto',
  minHeight: '300px',
  [theme.breakpoints.down('md')]: {
     maxWidth: '100%'
  },
});
const Modal = styled(
  'div',
  {}
)({
  maxWidth: '100vw',
  minHeight: '100vh',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'rgb(0, 0, 0, 0.5)',
});
const CloseButton = styled(
  'button',
  {}
)({
  position: 'absolute',
  backgroundColor: 'wheat',
  padding: '5px',
  bottom: 'none',
  borderRadius: '5px',
  right: '5px',
  top: '30%',
});
const smallScreen = window.screen.width <= 480 ? true : false;

// eslint-disable-next-line react/prop-types
const Service = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container
      sx={{
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
          alignContent:'center',
           alignItems:'center',
          // backgroundColor:'red'
         
        },
      }}
    >
      <Left
        sx={{
          [theme.breakpoints.down('md')]: {
            display: 'none',
          },
        }}
      >
        <Image
          sx={{
            display: `${(props) => props.open && 'none'}`,
            [theme.breakpoints.down('md')]: {
              display: 'none',
            },
          }}
          open={!open}
          src={mac}
        />
        <Video
          sx={{
            display: `${(props) => !props.open && 'none'}`,
          }}
          autoPlay
          loop
          controls
          open={open}
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
        />
      </Left>
      <Right
        
      >
        <Wrapper
          sx={{
            [theme.breakpoints.down('md')]: {
              minWidth: '100%',
              // padding: '100%',
              // display:'none'
            },
          }}
        >
          <Title variant="h3"> Simple process to start with us</Title>
          <Desc>
            Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Culpa, nisi. Lorem ipsum dolor, modi! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Impedit, repudiandae. ipsum dolor sit,
            amet consectetur adipisicing elit. Beatae, nulla?
          </Desc>

          <CardContainer
           
          >
            <MiniCard
              props="cross platform   Mobile app design"
            />
            <MiniCard props="Responsive web design" />
            <MiniCard props="HOSTING SERVICE" />
          </CardContainer>
          <Button onClick={() => setOpen(!open)}>
            <Icon src={PlayIcon} />
            How it works
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video
            sx={{
              display: `${(props) => !props.open && 'none'}`,
              [theme.breakpoints.down('md')]: {
                minWidth: '100%',
              },
            }}
            open={open}
            src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
            autoPlay
            loop
            controls
          />
          <CloseButton onClick={() => setOpen(true)}>Close</CloseButton>
        </Modal>
      )}
    </Container>
  );
};

export default Service;
