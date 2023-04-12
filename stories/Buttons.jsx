import { makeStyles, Button } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';
import './button.css';


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
  ndbutton: {
    background: "#000",
  },  
});

/**
 * Primary UI component for user interaction
 */
export const Buttons = ({ size, typer, label, ...props }) => {

  const styles = useStyles();
  return (
    <Button 
    appearance={typer}
    size={size}
    {...props}
   >{label}</Button>
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
