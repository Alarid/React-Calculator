import React from 'react';
import PropTypes from 'prop-types';

import './Buttons.css';
import './NumberButton.css';

const NumberButton = ({ value, onClick }) => {
  return (
    <button
      className="button number-button"
      type="button"
      value={value}
      onClick={onClick}
    >
      { value }
    </button>
  )
}

NumberButton.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default NumberButton;