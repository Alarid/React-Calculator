import React from 'react';
import PropTypes from 'prop-types';

import './Display.css';

const Display = ({ text }) => {
  return (
    <div className="display">
      <span>{ text }</span>
    </div>
  )
}

Display.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Display;