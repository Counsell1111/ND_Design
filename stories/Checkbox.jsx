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

export const checkbox = ({ labelPosition, disabled, label, size, required }) => {
    const styles = useStyles();
  return (
    <div className={styles.root}>
     <Checkbox 
     labelPosition={labelPosition}
     size={size}
     label={label}
     {...{disabled}}
     {...{required}}/>
  </div>
   );
};


checkbox.propTypes = {
    size: PropTypes.oneOf(['medium', 'large']),
    labelPosition: PropTypes.oneOf(['before','after']),
    disabled: PropTypes.oneOf([ 'disabled', '']),
    required: PropTypes.oneOf(['required', '']),
  };
  
  checkbox.defaultProps = {
    size: 'medium',
    labelPosition: 'after',
    disabled: '',
    required: '',
  };