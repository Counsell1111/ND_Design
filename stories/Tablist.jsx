import {  
    makeStyles,
    shorthands,
    Tab,
    TabList, } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';
import {
    CalendarMonthRegular,
    CalendarMonthFilled,
    bundleIcon,
  } from "@fluentui/react-icons";
  
  const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);
  
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
      disabled={disabled}
      vertical={vertical}
    >
        <Tab icon={icon} value="tab1">First Tab</Tab>
        <Tab icon={icon} value="tab2">Second Tab</Tab>
        <Tab icon={icon} value="tab3">Third Tab</Tab>
        <Tab icon={icon} value="tab4">Fourth Tab</Tab>
      </TabList>
    </div>
   );
};


Tablist.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    appearance: PropTypes.oneOf(['transparent', 'subtle']),
    disabled: PropTypes.oneOf(['disabled', '']),
    vertical: PropTypes.oneOf(['vertical','']),
    icon: PropTypes.oneOf(['<CalendarMonth />','']),
  };
  
Tablist.defaultProps = {
    size: 'medium',
    appearance: 'subtle',
    disabled: '',
    vertical: '',
    icon: '',
  };