import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
 height: 60px;
  `;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    background: linear-gradient(99deg, white 0%, #eba08b 100%);
`;
const Left = styled.div`
width: 60%;
align-items: center;
display: flex;
justify-content: space-between;

`;
const Menu = styled.ul`
display: flex;
list-style: none;
@media only screen and (max-width:480px) {
    display:none;
}

`;
const MenuItem = styled.li`

margin-right: 32px;
font-size: 25px;
font-weight: inherit;
 color: black;
 cursor: pointer;

`;

const Logo = styled.div`
font-weight: italic;
font-family: 'Playfair Display';
font-size: 37px;
text-decoration: underline blanchedalmond ;
cursor: pointer;
`;
const Button = styled.button`
border: 2px solid gray;
width: 150px;
height: 60px;
z-index: 1;
 /* padding:  19px 15px; */
 margin-bottom: 4px;
 /* margin-top: -20px; */
 align-self: flex-end;
 background-color: blueviolet;
 color: white;
 font-weight: bold;
 border-radius: 10px;
 cursor: pointer;
`;
const Navbar = () => {
    return (<Container >
        <Wrapper>
            <Left>
                <Logo>
                    HOME
                </Logo>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Features</MenuItem>
                    <MenuItem>Service</MenuItem>
                    <MenuItem>Pricing</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Menu>
            </Left>

            <Button>
                JOIN US
            </Button>
        </Wrapper>
    </Container>
    );
};

export default Navbar;