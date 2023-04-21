
import {
    shorthands,
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
  
  export const field = ({ size, label, validate_state, validate_text, ...props }) => {
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
  
  
 field.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    validate_state: PropTypes.oneOf(['none', 'success', 'warning', 'error']),
  };
  
  field.defaultProps = {
    size: 'medium',
    validate_state: 'success',
  };
  