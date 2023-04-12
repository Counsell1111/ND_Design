import {  
    shorthands,
    makeStyles,
    useId,
    Input,
    Label,
    InputProps, } from "@fluentui/react-components";
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

export const Inputs = ({ size, label, ...props }) => {
    const inputId = useId("input");
    const styles = useStyles();
  return (
    <div className={styles.root}>
    <Label size={size} htmlFor={inputId}>
    {label}
    </Label>
    <Input size={size} placeholder={label} id={inputId} />
  </div>
   );
};


Input.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };
  
  Input.defaultProps = {
    size: 'medium',
  };