import React from 'react';
import map from '../asset/map.png';
import send from '../asset/send.png';
import phone from '../asset/phone.png';
import UseForn from './UseForn';
import { styled  } from '@mui/system';
import { theme } from '../theme/theme';
import { Box } from '@mui/material';

const Container = styled(
 Box,
  {}
)({
  height: '90%',
  backgroundImage:
    ' url("https://img.freepik.com/free-vector/realistic-white-golden-geometric-background_79603-2032.jpg?t=st=1647859942~exp=1647860542~hmac=2f655f1264b54a2833b61a89db5ce09edcc7e861b78a75e51ec1332495831cf5&w=1380")',
});
const Wrapper = styled(
  'div',
  {}
)({
  height: '100%',
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // @media only screen and (max-width: 480px) {
  //   flex-direction: column;
  // }
});

const Form = styled(
  'form',
  {}
)({
  margin: '10px',
  height: '250px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  //   @media only screen and (max-width: 480px) {
  //     flex-direction: column;
  //     /* margin: 10px; */
  //   }
});

const Title = styled(
  'h1',
  {}
)({
  marginTop: '0px',
  margin: '50px',
  // @media only screen and (max-width: 480px) {
  //     margin: 30px;
  // }
});
const AddressContainer = styled(
  'div',
  {}
)({
  width: '50%',
  display: 'flex',
  flexDirection: ' column',
  alignItems: 'center',
  // @media only screen and (max-width: 480px) {
  //     width: 100%,
  //     margin-top: 20px,
  // }
});

const FormContainer = styled(
  'div',
  {}
)({
  margin: '10px',
  width: '50%',
  height: '250px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  // @media only screen and (max-width: 480px) {
  //     width: 100%,
  // }
});
const AddresItem = styled(
  'div',
  {}
)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '50px',
  // @media only screen and (max-width: 480px) {
  //     margin-bottom: 0px;
  //     margin-top: 56px;
  // }
});
const Icon = styled(
  'img',
  {}
)({
  width: '30px',
  padding: '10px',
  // @media only screen and (max-width: 480px) {
  //     width: 15px;
  //     padding: 5px;
  // }
});

const Text = styled(
  'span',
  {}
)({
  fontSize: '20px',
  fontStyle: 'italic',
  marginRight: '15px',
  // @media only screen and (max-width: 480px) {
  //     font-size: 12px;
  // }
});

const Contact = () => {
  return (
    <Container
      sx={{
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          display: 'none',
        },
      }}
    >
      <Wrapper
        sx={{
          [theme.breakpoints.down('md')]: {
            display: 'none',
          },
        }}
      >
        <FormContainer>
          <Title>
            ANY QUESTIONS ..? <br /> GET IN TOUCH !
          </Title>
          <Form>
            <UseForn />
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
