import {  
    Label,
    makeStyles,
    Radio,
    RadioGroup,
    tokens } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';
import './global.css';


const useStyles = makeStyles({
    field: {
      display: "grid",
      gridRowGap: tokens.spacingVerticalS,
    },
  });

export const radiogroup = ({ size, disabled, label }) => {
    const styles = useStyles();
  return (
    <div className={styles.field}>
 <Label size={size}>{label}</Label>
   <RadioGroup defaultValue="Option Two" {...{disabled}} layout={layout}>
     <Radio value="Option One" label="Option One" />
     <Radio value="Option Two" label="Option Two" />
     <Radio value="Option Three" label="Option Three" disabled />
     <Radio value="Option Four" label="Option Four" />
   </RadioGroup>
   </div>
   );
};

radiogroup.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  layout: PropTypes.oneOf(['horizontal','vertical','horizontal-stacked']),
  disabled: PropTypes.oneOf([ 'disabled', ''])
};

radiogroup.defaultProps = {
  size: 'medium',
  layout: 'horizontal',
  disabled: '',
};
