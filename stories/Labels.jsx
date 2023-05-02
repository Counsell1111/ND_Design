import {  
    shorthands,
    makeStyles,
    Label } from "@fluentui/react-components";
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

export const Labels = ({}) => {
    const styles = useStyles();
  return (
    <div className={styles.root}>
      <Label size="small">Small</Label>
  </div>
   );
};


Labels.propTypes = {

  };
  
Labels.defaultProps = {

  };