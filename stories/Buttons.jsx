import { makeStyles, Button } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Buttons = ({ backgroundColor, size, typer, label, ...props }) => {
  return (
    <Button 
    className={['storybook-button']}
    style={backgroundColor && { backgroundColor }}
    appearance={typer}
    size={size}
    {...props}
    shape="circular">{label}</Button>
   );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  typer: PropTypes.oneOf(['primary', 'outline', 'subtle', 'transparent']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
