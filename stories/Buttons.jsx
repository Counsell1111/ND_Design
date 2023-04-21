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
export const button = ({ disabled, size, appearance, label, ...props }) => {

  const styles = useStyles();
  return (
    <Button 
    appearance={appearance}
    size={size}
    {...{disabled}}
    {...props}
   >{label}</Button>
   );
};

button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  appearance: PropTypes.oneOf(['primary', 'outline', 'subtle', 'transparent']),
  disabled: PropTypes.oneOf([ 'disabled', '']),
};

button.defaultProps = {
  size: 'medium',
  appearance: 'primary',
  disabled: '',
};
