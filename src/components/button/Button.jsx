import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ value }) => (
  <button type="button" className="button">
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
