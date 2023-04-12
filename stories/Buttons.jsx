import { makeStyles, Button } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Buttons = ({ primary, backgroundColor, size, typer, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <Button 
    className={['storybook-button', mode].join(' ')}
    style={backgroundColor && { backgroundColor }}
    appearance={typer}
    size={size}
    {...props}
    shape="circular">{label}</Button>
   );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  typer: PropTypes.oneOf(['primary', 'outline', 'subtle', 'transparent']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
