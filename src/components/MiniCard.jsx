/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Search from '../asset/search.png';
const Container = styled.div`
  min-width: 100px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  -webkit-box-shadow: -5px 1px 17px 22px #ccc4ad;
  box-shadow: -5px 1px 17px 22px #e0ddd1;
  @media only screen and (max-width: 480px) {
    width: 50px;
  }
`;
const Image = styled.img`
  width: 20px;
`;
const Text = styled.span`
  margin-top: 10px;
  text-align: center;
  @media only screen and (max-width: 480px) {
    font-size: 13px;
  }
`;
const MiniCard = ({ props }) => {
  return (
    <Container>
      <Image src={Search} />
      <Text>{props}</Text>
    </Container>
  );
};

export default MiniCard;
