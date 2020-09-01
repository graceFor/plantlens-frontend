import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Logo from "Components/Logo";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(220, 220, 220, 0.8);
`;

const List1 = styled.ul`
  margin-left: 12px;
  display: flex;
`;

const List2 = styled.ul`
  position: fixed;
  margin-left: 88%;
  float: right;
`;

const Item = styled.li`
  width: 90px;
  height: 50px;
  float: right;
  text-align: center;
`;
const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Navbar = () => (
  <Container>
    <List1>
      <SLink to="/">
        <Logo width="30px" height="30px"></Logo>
      </SLink>
      <Item>
        <SLink to="/">PlantLens</SLink>
      </Item>
    </List1>
    <List2>
      <Item>
        <SLink to="/Signup">Sign up</SLink>
      </Item>
      <Item>
        <SLink to="/Login">Login</SLink>
      </Item>
      <Item>
        <SLink to="/Login">Search</SLink>
      </Item>
    </List2>
  </Container>
);

export default Navbar;
