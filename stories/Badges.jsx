import { makeStyles, shorthands, Badge, BadgeProps } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    container: {
      "> div": { ...shorthands.padding("20px") },
    },
  });

export const badge = ({ size, label, appearance, shape, color }) => {
    const styles = useStyles();
  return (
    <Badge appearance={appearance} size={size} shape={shape} color={color}>{label}</Badge>
   );
};


badge.propTypes = {
    size: PropTypes.oneOf(['small','tiny','extra-small','medium','large','extra-large']),
    appearance: PropTypes.oneOf(['filled','ghost','outline','tint']),
    shape: PropTypes.oneOf(['circular','square','rounded']),
    color: PropTypes.oneOf(['brand','danger','important','informative','severe','subtle','success','warning']),
  };
  
badge.defaultProps = {
    size: 'medium',
    appearance: 'primary',
    shape: 'circular',
    color: 'brand',
  };