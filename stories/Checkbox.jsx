import {  
    shorthands,
    makeStyles,
    Checkbox } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
       display: "flex",
       flexDirection: "column",
       ...shorthands.gap("2px"),
       maxWidth: "400px",
    },
  });

export const checkbox = ({ disabled, label, size }) => {
    const styles = useStyles();
  return (
    <div className={styles.root}>
     <Checkbox 
     size={size}
     label={label}
     {...{disabled}} />
  </div>
   );
};


checkbox.propTypes = {
    size: PropTypes.oneOf(['medium', 'large']),
    disabled: PropTypes.oneOf([ 'disabled', '']),
  };
  
  checkbox.defaultProps = {
    size: 'medium',
    disabled: '',
  };