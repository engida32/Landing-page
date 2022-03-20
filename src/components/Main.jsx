import styled from 'styled-components'
import AnimatedShape from './AnimatedShape'
import mac from '../asset/img/mac.jpg'
import desktop from '../asset/img/pc-desktop.jpg'
const Container = styled.div`
    height:calc( 100vh - 60px);
    display:flex`
const Left = styled.div`
width:60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
width: 60%;
font-size: 60px;
`
const Description = styled.p`
margin-top: 20px;
width: 60%;
font-size: 20px;
display:flex;
`
const Info = styled.div`
width:60%;
display:flex;
justify-content: space-between;
align-items: center;
margin-top: 50px;
`
const Button = styled.button`
width: 150px;
height: 80px;
padding: 22px;
background-color:blueviolet;
 border-radius: 10%;
font-weight: 900;
border: none;
word-spacing: 3px;
cursor: pointer;
color: black;
`
const Contact = styled.div`
display:flex;
flex-direction:column`
const Phone = styled.span`
font-weight: bold;
color:black;
text-decoration: underline blue;
font-size: 22px;
color: green;
`
const ContactText = styled.span`
color:rebeccapurple;

margin-top: 5px;`
const Right = styled.div`
width:60%;
align-content: center;
align-items: center;
`

const Image = styled.img`
background: linear-gradient(crimson, pink);

border-bottom-left-radius:22%;
border-top-left-radius: 14%;
background-color: white;
align-content: center;
align-items: center;
width:99%;
height: 100%;
`



const Main = () => {
    return (
        <Container >
            <Left >
                <Title>
                    ADVENTURE IN CREATIVE AGE
                </Title>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo sunt necessitatibus error quibusdam aspernatur quos ex enim neque aut.
                </Description>
                <Info>
                    <Button> Start Project </Button>
                    <Contact>
                        <Phone>
                            Call us (012) 345-6789
                        </Phone>
                        <ContactText>

                            For any Question or concerns </ContactText>
                    </Contact>      </Info>


            </Left>
            <Right><Image src={desktop} />
            </Right>
            <AnimatedShape />
        </Container>


    )
}
export default Main;