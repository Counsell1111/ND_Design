import { makeStyles, shorthands, Spinner } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    container: {
      "> div": { ...shorthands.padding("20px") },
    },
  });

export const Spinner = ({ size, label, appearance, labelPosition }) => {
    const styles = useStyles();
  return (
    <Spinner appearance={appearance} size={size} labelPosition={labelPosition} label={label} />
   );
};


Spinner.propTypes = {
    size: PropTypes.oneOf(['small','tiny','extra-small','medium','large','extra-large','huge']),
    appearance: PropTypes.oneOf(['primary','inverted']),
    labelPosition: PropTypes.oneOf(['before','after','above','below']),
  };
  
Spinner.defaultProps = {
    size: 'medium',
    appearance: 'primary',
    labelPosition: 'after',
  };