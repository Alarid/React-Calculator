import React from 'react';
import PropTypes from 'prop-types';

import './Buttons.css';
import './OperationButton.css';

const OperationButton = ({ label, canAddOperation, onClick }) => {
  return (
    <button
      className="button operation-button"
      type="button"
      onClick={onClick}
      value={label}
      disabled={!canAddOperation}
    >
      {label}
    </button>
  );
};

OperationButton.propTypes = {
  label: PropTypes.string.isRequired,
  canAddOperation: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default OperationButton;