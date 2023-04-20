
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
  
  export const Fields = ({ }) => {
      const styles = useStyles();
      return (
            <Field
  >
    <Input />
  </Field>
      );
  };
  
  
  Fields.propTypes = {
  };
  
  Fields.defaultProps = {
  };
  