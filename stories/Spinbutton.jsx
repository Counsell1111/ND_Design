import {  
    makeStyles,
    tokens,
    useId,
    Label,
    SpinButton, } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';

const useLayoutStyles = makeStyles({
    base: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "500px",
  
      "> label": {
        marginBottom: tokens.spacingVerticalXXS,
      },
    },
  });

export const Spinbutton = ({ size, label, appearance, disabled }) => {
    const layoutStyles = useLayoutStyles();
    const id = useId();
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <SpinButton size={size} apperence={appearance} defaultValue={10} min={0} max={20} id={id} {...{disabled}}/>
    </>
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