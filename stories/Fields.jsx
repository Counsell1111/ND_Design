
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
  
  export const fields = ({ contenta_after, disabled, required, placeholder, size, label, validate_state, validate_text }) => {
      const styles = useStyles();
      return (
          <div className={styles.root}>
            <Field
     label={label}
     size={size}
     validationState={validate_state}
     validationMessage={validate_text}
     {...{required}}
  >
    <Input 
          placeholder={label}
          size={size}
          contentAfter={<link>{contenta_after}</link>}
         {...{disabled}}
         />
  </Field>
        </div>
      );
  };
  
  
 fields.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    validate_state: PropTypes.oneOf(['none', 'success', 'warning', 'error']),
    disabled: PropTypes.oneOf([ 'disabled', '']),
    required: PropTypes.oneOf(['required', '']),
    contenta_after: PropTypes.oneOf(['Copy Me',''])
  };
  
  fields.defaultProps = {
    size: 'medium',
    validate_state: 'none',
    disabled: '',
    required: '',
    contenta_after: '',
  };
  