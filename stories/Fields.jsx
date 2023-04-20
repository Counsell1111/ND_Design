
import {
    Field,
    Input,
    makeStyles,
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
  
  export const Fields = ({ size, label, typer, validate_state, validate_text, ...props }) => {
      const styles = useStyles();
      return (
          <div className={styles.root}>
            <Field
     placeholder={label}
     size={size}
     validationState={validate_state}
     validationMessage={validate_text}
    {...props}
  >
    <Input />
  </Field>
        </div>
      );
  };
  
  
  Dropdowns.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    typer: PropTypes.oneOf(['outline','underline','filled-darker','filled-lighter']),
    validate_state: PropTypes.oneOf(['none', 'success', 'warning', 'error']),
  };
  
  Dropdowns.defaultProps = {
    size: 'medium',
    typer: 'outline',
    validate_state: 'none',
  };
  