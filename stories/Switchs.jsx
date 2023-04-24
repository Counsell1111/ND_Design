import { makeStyles, Switch } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';
import './global.css';


const useStyles = makeStyles({
  innerWrapper: {
    columnGap: "15px",
    display: "flex",
  },
  outerWrapper: {
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
  },
});

export const switchs = ({ disabled, label }) => {

  const styles = useStyles();
  return (
   <Switch label={label}  {...{disabled}} />
   );
};

switchs.propTypes = {
  disabled: PropTypes.oneOf([ 'disabled', '']),
};

switchs.defaultProps = {
  disabled: '',
};
