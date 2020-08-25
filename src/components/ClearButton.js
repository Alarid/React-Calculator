import React from 'react';
import PropTypes from 'prop-types';

import './Buttons.css';
import './ClearButton.css';

const ClearButton = ({ onClear }) => (
  <button
    className="button clear-button"
    type="button"
    onClick={onClear}
  >
    clear
  </button>

);

ClearButton.propTypes = {
  onClear: PropTypes.func.isRequired,
};

export default ClearButton;