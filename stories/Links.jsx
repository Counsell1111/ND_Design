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
    This is most certainly an{" "}
    <Link href="https://www.netdocuments.com" inline>
      inline link
    </Link>{" "}
    used within text
  </div>
   );
};


Links.propTypes = {

  };
  
Links.defaultProps = {

  };