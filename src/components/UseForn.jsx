import React from 'react';
import { styled } from '@mui/system';

import { useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { theme } from '../theme/theme';
 
const LeftForm = styled(
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
 
    [theme.breakpoints.down('md')]: {
      minHheight: '50%',
      // backgroundColor:'red',
    },
 
});
const RightForm = styled(
  'div',
  {}
)({
  margin: '10px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});
const Button = styled(
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

const Input = styled(
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
const TextArea = styled(
  'textarea',
  {}
)({
  borderRadius: '10px',
  border: 'solid 2px crimson',
  minWidth: '200px',
  height: '60%',
  padding: '30px',

 
 
     
    [theme.breakpoints.down('md')]: {
      // minHheight: '50%',
      mt:'20px'
      // backgroundColor:'red',
    },
 
});

const SelectContainer = styled(
  Box,
  {}
)({
  alignContent: 'center',
  alignSelf: 'center',
  textAlign: 'center',
  padding: '0px',
});
export default function Form() {
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
