import React from 'react';
import styled from 'styled-components';
import Search from '../asset/search.png';
const Container = styled.div`
width: 100px;
padding: 20px;
display: flex;
align-items: center;
flex-direction: column ;
-webkit-box-shadow: -5px 1px 17px 22px #CCC4AD;
box-shadow: -5px 1px 17px 22px #E0DDD1;
   @media only screen and (max-width:480px) {
width: 50px;
}
`;
const Image = styled.img`
width: 20px;
`;
const Text = styled.h2`
margin-top: 10px;
text-align: center;
   @media only screen and (max-width:480px) {
font-size: 13px;
}
`;
const MiniCard = () => {
    return (
        <Container>
            <Image src={Search} />
            <Text>
                Lorem ipsum dolor sit amet.
            </Text>
        </Container>
    );
};

export default MiniCard;