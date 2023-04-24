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

export const switchs = ({ labelPosition, checked, disabled, required, label }) => {

  const styles = useStyles();
  return (
   <Switch label={label} labelPosition={labelPosition} {...{checked}} {...{disabled}} {...{required}}/>
   );
};

switchs.propTypes = {
  labelPosition: PropTypes.oneOf(['before','after', 'above']),
  disabled: PropTypes.oneOf([ 'disabled', '']),
  checked: PropTypes.oneOf(['checked','']),
  required: PropTypes.oneOf(['required', '']),
};

switchs.defaultProps = {
  labelPosition: 'after',
  disabled: '',
  required: '',
  checked: '',
};
