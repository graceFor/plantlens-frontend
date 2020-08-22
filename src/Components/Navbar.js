import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Logo from "Components/Logo";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Nav = styled.ul`
  margin-left: 4%;
  margin-right: 4%;
`;
const Navbar = () => (
  <Container>
    <Link to={"Main"}>
      <Logo
        width="30px"
        height="30px"
        margin-left="30%"
        class="d-inline-block align-top opacity-2"
        alt=""
        loading="lazy"
      ></Logo>
    </Link>
    <Nav>Home</Nav>
  </Container>
);

export default Navbar;
