import React from 'react';
import './signature.scss';
import PropTypes from 'prop-types';

function Signature({ name, sername }) {
  return (
    <p className="signature-name">
      {name}
      {sername}
    </p>
  );
}
Signature.propTypes = {
  name: PropTypes.string.isRequired,
  sername: PropTypes.string.isRequired,
};

export default Signature;
