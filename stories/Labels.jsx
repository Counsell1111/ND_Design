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

export const Labels = ({weight, size, label}) => {
    const styles = useStyles();
  return (
    <div className={styles.root}>
      <Label 
              weight={weight}
              size={size}
              >{label}</Label>
  </div>
   );
};


Labels.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    weight: PropTypes.oneOf(['regular', 'semibold']),
  };
  
Labels.defaultProps = {
    size: 'medium',
    weight: 'regular',
  };