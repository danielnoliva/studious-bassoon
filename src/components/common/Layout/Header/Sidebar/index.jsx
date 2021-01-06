import React from "react";
import PropTypes from "prop-types";
import NavbarLinks from "../NavbarLinks";
import { Wrapper } from "./styles";

const Sidebar = ({ sidebar, toggle }) => {
  return (
    <Wrapper active={sidebar} onClick={toggle}>
      <NavbarLinks />
    </Wrapper>
  );
};

Sidebar.propTypes = {
  sidebar: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Sidebar;
