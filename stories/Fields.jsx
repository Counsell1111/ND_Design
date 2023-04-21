
import {
    Field,
    Input,
  } from "@fluentui/react-components";
  import * as React from "react";
  import PropTypes from 'prop-types';
  
  export const field = ({ size, label, validate_state, validate_text, ...props }) => {
      const styles = useStyles();
      return (
            <Field
  >
    <Input />
  </Field>
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
  