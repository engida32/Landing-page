import React from 'react'
import styled from 'styled-components'
import map from '../asset/map.png'
import play from '../asset/play.png'
import send from '../asset/send.png'
import phone from '../asset/phone.png'
const Container = styled.div`
height: 50%;    ;
background-image: url('https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
`
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

`


const Form = styled.form`
 height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LeftForm = styled.div`
height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px
`
const RightFotm = styled.div`

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Input = styled.input`
  width: 200px;
  padding: 20px;
  border: solid 1px crimson;
  border-radius: 12px;
/* height: 60% ; */
`
const TextArea = styled.textarea`
 width: 200px;
  height: 60%;
  padding: 20px;

`
const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
`
const Title = styled.h1`
margin-top: 0px;
margin: 50px;
`
const AddressContainer = styled.div`
 width: 50%;
display: flex;
flex-direction: column;
align-items: center;
`

const FormContainer = styled.div`
width: 50%;
height: 250px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column
`
const AddresItem = styled.div`
display: flex;
align-items: center;
margin-bottom: 50px;

`
const Icon = styled.img`
width: 30px;
padding: 10px;

`
const Text = styled.span`
font-size: 20px;
font-style: italic;
margin-right: 15px;

`
const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title> ANY QUESTIONS ..? <br /> GET IN TOUCH !  </Title>
                    <Form>

                        <LeftForm>
                            <Input placeholder='please enter your name' />
                            <Input placeholder='please enter your email' />
                            <Input placeholder='please enter your  subject' />

                        </LeftForm>
                        <RightFotm>

                            <TextArea placeholder='Please enter' />
                            <Button> Submit</Button>
                        </RightFotm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AddresItem>
                        <Icon src={map} />
                        <Text>Lorem ipsum dolor sit amet.</Text>
                    </AddresItem>
                    <AddresItem>
                        <Icon src={phone} />
                        <Text>(012) 345-5678</Text>
                        <Text>(012) 345-5678</Text>
                    </AddresItem>
                    <AddresItem>
                        <Icon src={send} />
                        <Text>email@noone.et</Text>
                        <Text>email@noone.et</Text>
                    </AddresItem>
                </AddressContainer>
            </Wrapper>

        </Container>
    )
}

export default Contact