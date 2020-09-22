import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const Button = styled.button``;

const LeafPresenter = () => (
  <Container>
    <Helmet>
      <title>Plant | PlantLens</title>
    </Helmet>
  </Container>
);

export default PlantPresenter;
