import {  
    shorthands,
    Field,
    Textarea,
    makeStyles, } from "@fluentui/react-components";
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

export const textarea_footer = ({ appearance, disabled, required, placeholder, size, label, validate_state, validate_text }) => {
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
    <Textarea  
            appearance={appearance}
            resize="vertical"
            placeholder={label}
            size={size}
           {...{disabled}}
           />
  </Field>
  </div>
   );
};


textarea_footer.propTypes = {
    appearance: PropTypes.oneOf(['outline','underline','filled-darker','filled-lighter','filled-darker-shadow','filled-lighter-shadow']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    validate_state: PropTypes.oneOf(['none', 'success', 'warning', 'error']),
    disabled: PropTypes.oneOf([ 'disabled', '']),
    required: PropTypes.oneOf(['required', '']),
  };
  
  textarea_footer.defaultProps = {
    size: 'medium',
    validate_state: 'none',
    disabled: '',
    required: '',
  };