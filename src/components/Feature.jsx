import React from 'react'
import styled from 'styled-components'
import phone from '../asset/img/earphone.jpg'
import desktop2 from '../asset/img/mac.jpg'
import AnimatedShape from './AnimatedShape';
const Container = styled.div`
display:flex;
`
const Left = styled.div`
width: 50%;
 `
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
 `
const Image = styled.img`
padding-top:12px;
 width: 624px;
 height: 700px;
 border-radius: 21px;
 border-color: inherit;
background: linear-gradient(139deg, rgba(242, 230, 218, 0.5) 0%, #FFE3DC 100%);
 `
const Title = styled.span`
font-size: 70px;
`

const Subtitle = styled.span`
font-style: italic;
font-style: italic;
font-size: 25px;
margin-top: 30px;
`


const Description = styled.p`
font-style: 20px;
color: #9197;
font-stretch: italic;
margin-top: 30px;
`
const Button = styled.button`
width: 150px;
border: none;
padding: 15px 20px;
color: white;
background-color: darkblue;
font-style: 20px;
border-radius:20px;
margin-top: 10px;
cursor: pointer;

`
const Feature = () => {
  return (
    <Container>
      <Left>
        <Image
          src={desktop2}
        />
      </Left>
      <Right>
        <Title>
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


  )
}

export default Feature