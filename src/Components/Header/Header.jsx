import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';


const Header = props => (
  <header className="Header-head">
    <u>{props.headerText}</u>
  </header>
);

Header.propTypes = {
  headerText: PropTypes.string,
};

Header.defaultProps = {
  headerText: 'hello',
};
export default Header;

