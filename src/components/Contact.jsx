import React from 'react';
import styled from 'styled-components';
import map from '../asset/map.png';
import send from '../asset/send.png';
import phone from '../asset/phone.png';
const Container = styled.div`
height: 90%;    ;
background-image: url('https://img.freepik.com/free-vector/realistic-white-golden-geometric-background_79603-2032.jpg?t=st=1647859942~exp=1647860542~hmac=2f655f1264b54a2833b61a89db5ce09edcc7e861b78a75e51ec1332495831cf5&w=1380');
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width:480px) {
   flex-direction: column;

}

`;


const Form = styled.form`
 height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width:480px) {
   flex-direction: column;
   /* margin: 10px; */

}
`;
const LeftForm = styled.div`
height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width:480px) {
   height: 50%;
   margin-right:0px

}
`;
const RightFotm = styled.div`

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
    @media only screen and (max-width:480px) {
   height: 50%;

}
`;
const Input = styled.input`
  width: 200px;
  padding: 20px;
  border: solid 1px crimson;
  border-radius: 12px;
  @media only screen and (max-width:480px) {
   padding: 5px;

}
`;
const TextArea = styled.textarea`
 width: 200px;
  height: 60%;
  padding: 20px;
    @media only screen and (max-width:480px) {
margin-top: 20px;

}

`;
const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
   @media only screen and (max-width:480px) {
    padding: 5px;
    font-size: 14px;

}
`;
const Title = styled.h1`
margin-top: 0px;
margin: 50px;
@media only screen and (max-width:480px) {
margin: 30px;
}
`;
const AddressContainer = styled.div`
 width: 50%;
display: flex;
flex-direction: column;
align-items: center;
@media only screen and (max-width:480px) {
width: 100%;
margin-top: 20px;


}
`;

const FormContainer = styled.div`
width: 50%;
height: 250px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
@media only screen and (max-width:480px) {
   width: 100%;

}

`;
const AddresItem = styled.div`
display: flex;
align-items: center;
margin-bottom: 50px;
@media only screen and (max-width:480px) {
margin-bottom: 0px;
margin-top: 56px;
}
`;
const Icon = styled.img`
width: 30px;
padding: 10px;
@media only screen and (max-width:480px) {
   width: 15px;
   padding: 5px;

}

`;
const Text = styled.span`
font-size: 20px;
font-style: italic;
margin-right: 15px;
@media only screen and (max-width:480px) {
font-size: 12px;


}

`;
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
                        <Text>Lorem ipsum as wer</Text>
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
    );
};

export default Contact;