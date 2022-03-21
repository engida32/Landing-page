import React, { useState } from 'react'
import styled from 'styled-components'
import mac from '../asset/img/eyeglasses.png'
import MiniCard from './MiniCard'
import PlayIcon from '../asset/play.png'
const Container = styled.div`
height: 100%;
display:flex  ;
 @media only screen and (max-width:480px) {
  flex-direction: column;
}`
const Left = styled.div`
width: 50%;
position: relative;
   @media only screen and (max-width:480px) {
  display:none;
}

`
const Right = styled.div`
width: 50%;
   @media only screen and (max-width:480px) {
width: 100%;
}

`
const Image = styled.img`
display: ${(props) => props.open && 'none'};
margin-top: 21px;
height: 100%;
width: 100%;
`
const Wrapper = styled.div`
padding: 50px;
display: flex;
flex-direction: column;
   @media only screen and (max-width:480px) {
padding: 20px;
width: 100%;
}
`
const Title = styled.h1`
`
const Desc = styled.p`
font-size: 20px;
margin-top: 20px;
color: #555
`
const Icon = styled.img`

width: 20px;
margin-right:10px`
const CardContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 50px;
`
const Button = styled.button`
width: 180px;
bottom: none;
border-radius: 10px;
background-color: darkblue;
color: white;
font-size: 20px;
margin-top: 50px;
display: flex;
align-items: center;
cursor: pointer;
`
const Video = styled.video`
  display: ${(props) => !props.open && "none"};
position: absolute;
top: 0;
bottom: 0;
right: 0;
margin: auto;
height:400px;
@media only screen and (max-width:480px) {
width: 100%;
}

`
const Modal = styled.div`

width: 100vw;
height: 100vh;
position: absolute;
top: 0;
left: 0;
background-color: rgb(0,0,0,0.5);
`
const CloseButton = styled.button`
position: absolute;
background-color: wheat;
padding: 5px;
bottom: none;
border-radius: 5px;
right: 5px;
top: 30%;
`
const smallScreen = window.screen.width <= 480 ? true : false;

const Service = () => {
    const [open, setOpen] = useState(false);
    return (
        <Container>
            <Left>
                <Image open={open} src={mac} />
                <Video autoplay loop controls open={open}
                    src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"

                />
            </Left>
            <Right>
                <Wrapper>
                    <Title> Simple process to start with us</Title>
                    <Desc>
                        Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, nisi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, repudiandae. ipsum dolor sit, amet consectetur adipisicing elit. Beatae, nulla?
                    </Desc>
                    <CardContainer>

                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={() => setOpen(!open)}> <Icon src={PlayIcon} />

                        How it works
                    </Button>
                </Wrapper>
            </Right>
            {smallScreen && open && (
                <Modal>
                    <Video
                        autoplay loop controls open={open}
                        src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"

                    />
                    <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
                </Modal>)}
        </Container>
    )
}

export default Service