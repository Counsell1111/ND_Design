import { makeStyles, useId, Label, Slider  } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';

export const slider = ({size, label, disabled, vertical }) => {
  const id = useId();
  return (
    <div>
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
