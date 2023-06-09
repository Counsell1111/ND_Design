import {  
    makeStyles,
    shorthands,
    Tab,
    TabList, } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        ...shorthands.padding("50px", "20px"),
        rowGap: "20px",
    },
  });

export const Tablist = ({ icon, disabled, size, appearance, vertical }) => {
    const styles = useStyles();
  return (
    <div className={styles.root}>
      <TabList defaultSelectedValue="tab2"
      appearance={appearance}
      size={size}
      {...{disabled}}
      {...{vertical}}
    >
        <Tab value="tab1">First Tab</Tab>
        <Tab value="tab2">Second Tab</Tab>
        <Tab value="tab3">Third Tab</Tab>
        <Tab value="tab4">Fourth Tab</Tab>
      </TabList>
    </div>
   );
};


Tablist.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    appearance: PropTypes.oneOf(['transparent', 'subtle']),
    disabled: PropTypes.oneOf(['disabled', '']),
    vertical: PropTypes.oneOf(['vertical','']),
  };
  
Tablist.defaultProps = {
    size: 'medium',
    appearance: 'subtle',
    disabled: '',
    vertical: '',
  };