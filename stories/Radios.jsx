import {  
    Label,
    makeStyles,
    Radio,
    RadioGroup,
    tokens,
    useId, } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';
import './global.css';


const useStyles = makeStyles({
    field: {
      display: "grid",
      gridRowGap: tokens.spacingVerticalS,
    },
  });

export const Radiogroup = ({ disabled, label }) => {
    const styles = useStyles();
    const labelId = useId("label");
  return (
    <div className={styles.field}>
 <Label size={size} id={labelId}>{label}</Label>
   <RadioGroup defaultValue="Option Two" {...{disabled}} aria-labelledby={labelId}>
     <Radio value="Option One" label="Option One" />
     <Radio value="Option Two" label="Option Two" />
     <Radio value="Option Three" label="Option Three" disabled />
     <Radio value="Option Four" label="Option Four" />
   </RadioGroup>
   </div>
   );
};

Radiogroup.propTypes = {
  disabled: PropTypes.oneOf([ 'disabled', '']),
};

Radiogroup.defaultProps = {
  disabled: '',
};
