import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Logo from "Components/Logo";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const ItemContainer = styled.div`
  margin-left: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Desc = styled.p`
  font-size: 35px;
  margin-top: 50px;
  text-align: center;
`;

const Button = styled.p`
  text-align: center;
  margin-top: 60px;
`;

const MainPresenter = () => (
  <Container>
    <Helmet>
      <title>Main | PlantLens</title>
    </Helmet>
  </Container>
);

export default MainPresenter;
