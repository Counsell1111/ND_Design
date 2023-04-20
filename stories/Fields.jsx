
import {
    makeStyles,
    shorthands,
    Field,
    Input,
  } from "@fluentui/react-components";
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
  
  export const Fields = ({ size, label, typer, ...props }) => {
      const styles = useStyles();
      return (
            <Field
     placeholder={label}
     appearance={typer}
     size={size}
    {...props}
  >
    <Input />
  </Field>
      );
  };
  
  
  Fields.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    typer: PropTypes.oneOf(['outline','underline','filled-darker','filled-lighter']),
  };
  
  Fields.defaultProps = {
    size: 'medium',
    typer: 'outline',
  };
  