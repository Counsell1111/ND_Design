import {  
    Field,
    ProgressBar,
    makeStyles,
    shorthands,
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

export const Progress = ({ size, validate_state, validate_text, value }) => {

    const styles = useStyles();
  return (
    <Field validationMessage={validate_text} validationState={validate_state}>
    <ProgressBar
      className={styles.container}
      thickness={size}
      color={validate_state}
      value={value}
    />
  </Field>
   );
};


Progress.propTypes = {
    size: PropTypes.oneOf(['medium', 'large']),
    validate_state: PropTypes.oneOf(['none', 'success', 'warning', 'error']),
  };
  
Progress.defaultProps = {
    size: 'medium',
    validate_state: 'none',
  };