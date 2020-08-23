import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Logo from "Components/Logo";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
`;
const Nav = styled.a`
  color: #4d1212;
`;
const Navbar = () => (
  <Container>
    <nav class="navbar navbar-expand-lg navbar-light ">
      <Nav>
        <a class="navbar-brand text-#4d1212" styled="" href="#">
          Navbar
        </a>
      </Nav>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </Container>
);

export default Navbar;