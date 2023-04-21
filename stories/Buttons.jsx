import { makeStyles, Button } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';
import './global.css';


const useStyles = makeStyles({
  innerWrapper: {
    columnGap: "15px",
    display: "flex",
  },
  outerWrapper: {
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
  },
});

/**
 * Primary UI component for user interaction
 */
export const Buttons = ({ disabled, size, typer, label, ...props }) => {

  const styles = useStyles();
  return (
    <Button 
    appearance={typer}
    size={size}
    disabled={disabled}
    {...props}
   >{label}</Button>
   );
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  typer: PropTypes.oneOf(['primary', 'outline', 'subtle', 'transparent']),
  disabled: PropTypes.oneOf([ 'disabled', '']),
};

Button.defaultProps = {
  size: 'medium',
  typer: 'primary',
  disabled: '',
};
