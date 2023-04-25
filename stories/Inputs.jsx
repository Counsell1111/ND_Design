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

export const Inputs = ({ size, label, appearance, disabled }) => {
    const inputId = useId("input");
    const styles = useStyles();
  return (
    <div className={styles.root}>
    <Label size={size} htmlFor={inputId}>
    {label}
    </Label>
    <Input size={size} placeholder={label} id={inputId} appearance={appearance} {...{disabled}}/>
  </div>
   );
};


Input.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    appearance: PropTypes.oneOf(['outline','underline','filled-darker','filled-lighter','filled-darker-shadow','filled-lighter-shadow']),
    disabled: PropTypes.oneOf([ 'disabled', '']),
  };
  
  Input.defaultProps = {
    size: 'medium',
    typer: 'outline',
    disabled: '',
  };