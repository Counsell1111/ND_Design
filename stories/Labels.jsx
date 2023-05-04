import {  
    shorthands,
    makeStyles,
    Label } from "@fluentui/react-components";
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

export const Labels = ({ disabled, required, weight, size, label}) => {
    const styles = useStyles();
  return (
    <div className={styles.root}>
      <Label 
              weight={weight}
              size={size}
              {...{required}}
              {...{disabled}}
              >{label}</Label>
  </div>
   );
};


Labels.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    weight: PropTypes.oneOf(['regular', 'semibold']),
    disabled: PropTypes.oneOf([ 'disabled', '']),
    required: PropTypes.oneOf(['required', '']),
  };
  
Labels.defaultProps = {
    size: 'medium',
    weight: 'regular',
    disabled: '',
    required: '',
  };