
import {
    Field,
    Input,
    makeStyles,
  } from "@fluentui/react-components";
  import * as React from "react";
  import PropTypes from 'prop-types';
    
  const useStyles = makeStyles({
    root: {
       display: "flex",
       flexDirection: "column",
       maxWidth: "400px",
    },
  });
  
  export const fields = ({ size, label, validate_state, validate_text, ...props }) => {
      const styles = useStyles();
      return (
            <Field
     placeholder={label}
     size={size}
     validationState={validate_state}
     validationMessage={validate_text}
    {...props}
  >
    <Input />
  </Field>
      );
  };
  
  
 fields.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    validate_state: PropTypes.oneOf(['none', 'success', 'warning', 'error']),
  };
  
  fields.defaultProps = {
    size: 'medium',
    validate_state: 'success',
  };
  