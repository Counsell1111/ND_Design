import {  
    shorthands,
    makeStyles,
    useId,
    Label,
    SpinButton, } from "@fluentui/react-components";
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


export const Spinbutton = ({ size, label, appearance, disabled }) => {
    const id = useId();
    const styles = useStyles();
  return (
    <div className={styles.root}>
    <Label size={size} htmlFor={inputId}>
    {label}
    </Label>
      <SpinButton size={size} appearance={appearance} defaultValue={10} min={0} max={20} id={id} {...{disabled}}/>
      </div>
   );
};


Spinbutton.propTypes = {
    size: PropTypes.oneOf(['small', 'medium']),
    appearance: PropTypes.oneOf(['outline','underline','filled-darker','filled-lighter']),
    disabled: PropTypes.oneOf([ 'disabled', '']),
  };
  
  Spinbutton.defaultProps = {
    size: 'medium',
    typer: 'outline',
    disabled: '',
  };