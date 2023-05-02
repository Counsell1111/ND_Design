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

export const Links = ({}) => {
    const styles = useStyles();
  return (
    <div className={styles.root}>
    This is an{" "}
    <Link href="https://www.bing.com" inline>
      inline link
    </Link>{" "}
    used alongside other text
  </div>
   );
};


Links.propTypes = {

  };
  
Links.defaultProps = {

  };