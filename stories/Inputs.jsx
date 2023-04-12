import {  
    shorthands,
    makeStyles,
    useId,
    Input,
    Label,
    InputProps, } from "@fluentui/react-components";
import React from 'react';

const useStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      ...shorthands.gap("20px"),
      maxWidth: "400px",
      "> div": {
        display: "flex",
        flexDirection: "column",
        ...shorthands.gap("2px"),
      },
    },
  });

export const Inputs = ({ size, label, ...props }) => {
    const inputId = useId("input");
    const styles = useStyles();
  return (
    <div>
    <Label size={size} htmlFor={inputId}>
    {label}
    </Label>
    <Input size={size} id={inputId} />
  </div>
   );
};


Input.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    typer: PropTypes.oneOf(['primary', 'outline', 'subtle', 'transparent']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };
  
  Input.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
  };