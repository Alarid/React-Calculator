import React from 'react';
import PropTypes from 'prop-types';

import './Buttons.css';
import './OperationButton.css';

const OperationButton = ({ label, onClick }) => {
  return (
    <button
      className="button operation-button"
      type="button"
      onClick={onClick}
      value={label}
    >
      {label}
    </button>
  );
};

OperationButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default OperationButton;