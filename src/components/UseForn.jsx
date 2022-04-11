import React from 'react';
import { styled as styled2 } from '@mui/system';

import { useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { theme } from '../theme/theme';
 
const LeftForm = styled2(
  'div',
  {}
)({
  height: '100%',
   display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '10px',
  marginRight: '20px',

  // @media only screen and (max-width:480px) {
  //  height: 50%;
  //  margin-right:0p
});
const RightForm = styled2(
  'div',
  {}
)({
  margin: '10px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});
const Button = styled2(
  'button',
  {}
)({
  border: 'none',
  padding: '15px',
  backgroundColor: 'darkblue',
  color: 'white',
  fontSize: '20px',
  borderRadius: '10px',
  marginTop: '20px',
  cursor: 'pointer',
  alignContent: 'center',
  // @media only screen and (max-width:480px) {
  //   padding: 5px;
  //   font-size: 14px;

  // }
});

const Input = styled2(
  'input',
  {}
)({
  width: '200px',
  padding: '20px',
  border: 'solid 1px crimson',
  margin: '10px',
  borderRadius: '12px',
  // @media only screen and (max-width:480px) {
  //   paddinautoPlayg: 5px;
  // }
});
const TextArea = styled2(
  'textarea',
  {}
)({
  borderRadius: '10px',
  border: 'solid 2px crimson',
  width: '200px',
  height: '60%',
  padding: '30px',

  //      @media only screen and (max-width:480px) {
  //  margin-top: 20px;

  //  }
});

const SelectContainer = styled2(
  Box,
  {}
)({
  alignContent: 'center',
  alignSelf: 'center',
  textAlign: 'center',
  padding: '0px',
});
export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LeftForm
        sx={{
          [theme.breakpoints.down('md')]: {
            height: '50%',
            marginRight: 0,
            alignItems: 'center',
            alignContent: 'center',
          },
        }}
      >
        <SelectContainer
          sx={{
            [theme.breakpoints.down('md')]: {
              display: 'none',
            },
          }}
        >
          <select {...register('Title', { required: true })}>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </select>
        </SelectContainer>
        <Input
          type="text"
          placeholder="First name"
          {...register('First name', { required: true, maxLength: 80 })}
        />
        <Input
          type="text"
          placeholder="Email"
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
        />
      </LeftForm>
      <RightForm sx={{
         [theme.breakpoints.down('md')]: {
          height: '50%',
        },
      }}>
        <TextArea
          type="text"
          placeholder="your message"
          {...register('your message', {})}
        />
        <Button onClick={handleSubmit(onSubmit)}>Submit </Button>
      </RightForm>
    </form>
  );
}
