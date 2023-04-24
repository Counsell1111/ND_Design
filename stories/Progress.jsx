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

export const Progress = ({  }) => {

    const styles = useStyles();
  return (
    <Field validationMessage="Medium ProgressBar" validationState="none">
    <ProgressBar
      className={styles.container}
      thickness="medium"
      value={0.7}
    />
  </Field>
   );
};


Progress.propTypes = {

  };
  
Progress.defaultProps = {

  };