import {  
    shorthands,
    makeStyles,
    Checkbox, 
    CheckboxProps } from "@fluentui/react-components";
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

export const checkbox = ({ size, ...props }) => {
    const styles = useStyles();
  return (
    <div className={styles.root}>
     <Checkbox {...props} />
  </div>
   );
};


checkbox.propTypes = {
    size: PropTypes.oneOf(['medium', 'large']),
  };
  
  checkbox.defaultProps = {
    size: 'medium',
  };