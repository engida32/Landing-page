import React from 'react';
import styled from 'styled-components';
import desktop2 from '../asset/img/mac.jpg';
import AnimatedShape from './AnimatedShape';
import { styled as styled2 } from '@mui/system';
import { createTheme } from '@mui/material';
// import { styled as styled2 } from '@mui/system';
import { theme } from '../theme/theme';
const Container = styled2('div')(()=>({
    minHeight:'100vh',
    minWidth:'100vw',   
    display:'flex',
    justifyContent:'center',
        [ createTheme().breakpoints.down('md')]: {
            // flexDirection: 'column',
             padding: '30px 20px'
   
        }
}));
const Left = styled('div')(()=>({

    minWidth: '50%',
    [theme.breakpoints.down('md')]: {
        display:'none'
      },
}));


const Right = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
   @media only screen and (max-width:480px) {
    /* display : none; */
    max-width: 100%;
}


 `;
const Image = styled2('img')(()=>({
    paddingTop:'12px',
 maxWidth: '624px',
minHeight: '700px',
 borderRadius: '21px',
 borderColor: 'inherit',
background: 'linear-gradient(139deg, rgba(242, 230, 218, 0.5) 0%, #FFE3DC 100%)',
}));
 
const Title = styled.span`
font-size: 70px;
   @media only screen and (max-width:480px) {
  font-size: 40px;
}
`;

const Subtitle = styled.span`
 font-style: italic;
font-size: 25px;
margin-top: 30px;
`;


const Description = styled.p`
font-style: 20px;
color: #9197;
font-stretch: italic;
margin-top: 30px;
`;
const Button = styled.button`
// width: 150px;
border: none;
padding: 15px 20px;
color: white;
background-color: darkblue;
font-style: 20px;
border-radius:20px;
margin-top: 10px;
cursor: pointer;

`;
const Feature = () => {
    return (
        <Container>
            <Left>
                <Image
                    src={desktop2}
                    sx={{
                        [createTheme().breakpoints.down('md')]: {
                            display:'none'
                        },
                      }}
                />
            </Left>
            <Right>
                <Title >
                    <b>GOOD </b>  Design  <br />
                    <b>GOOD </b>  Business
                    <br />
                </Title>
                <Subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, porro.</Subtitle>
                <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur porro aperiam minus necessitatibus odio sapiente, obcaecati quia accusantium culpa veritatis.</Description>
                <Button>Learn More</Button>
            </Right>
            <AnimatedShape />
        </Container>


    );
};

export default Feature;