import {  
    shorthands,
    makeStyles,
    Link, LinkProps } from "@fluentui/react-components";
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

export const Links = ({ disabled, size, appearance, label }) => {
    const styles = useStyles();
  return (
    <div className={styles.root}>
    This is most certainly an{" "}
    <Link 
        appearance={appearance}
        size={size}
        {...{disabled}}
    href="https://www.netdocuments.com" inline>
      {label}
    </Link>{" "}
    used within text
  </div>
   );
};


Links.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    appearance: PropTypes.oneOf(['subtle', 'default']),
    disabled: PropTypes.oneOf([ 'disabled', '']),
  };
  
Links.defaultProps = {
    size: 'medium',
    appearance: '',
    disabled: '',
  };