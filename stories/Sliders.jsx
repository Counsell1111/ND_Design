import { makeStyles, useId, Label, Slider  } from "@fluentui/react-components";
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


export const slider = ({size, label, disabled, vertical }) => {
  const id = useId();
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Label htmlFor={id}>{label}</Label>
      <Slider       
      size={size}
      {...{disabled}}
      {...{vertical}}
      defaultValue={20} id={id} />
    </div>
   );
};

slider.propTypes = {
  size: PropTypes.oneOf(['small', 'medium']),
  disabled: PropTypes.oneOf([ 'disabled', '']),
  vertical: PropTypes.oneOf(['vertical','']),
};

slider.defaultProps = {
  size: 'medium',
  disabled: '',
  vertical: '',
};
