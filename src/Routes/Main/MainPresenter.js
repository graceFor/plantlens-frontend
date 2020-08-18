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
const MainPresenter = () => (
  <Container>
    <Helmet>
      <title>Main | PlantLens</title>
    </Helmet>
  </Container>
);

export default MainPresenter;