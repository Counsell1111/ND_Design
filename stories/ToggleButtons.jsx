import { ToggleButton } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';
import './global.css';

export const togglebutton = ({ disabled, size, appearance, label }) => {
  return (
   <ToggleButton appearance={appearance}
   size={size}
   {...{disabled}}
  >{label}</ToggleButton>
   );
};

togglebutton.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  appearance: PropTypes.oneOf(['', 'primary', 'outline', 'subtle', 'transparent']),
  disabled: PropTypes.oneOf([ 'disabled', '']),
};

togglebutton.defaultProps = {
  size: 'medium',
  appearance: '',
  disabled: '',
};
