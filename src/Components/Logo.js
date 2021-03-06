import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import logoPath from "assets/logo.png";

const RestIcon = styled.img.attrs({
  src: logoPath,
})`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Logo = (width, height) => (
  <>
    <RestIcon width={width} height={height}></RestIcon>
  </>
);

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Logo;
