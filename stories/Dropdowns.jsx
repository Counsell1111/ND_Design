import {  
  Dropdown,
  makeStyles,
  Option,
  OptionGroup,
  shorthands,
  useId, } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';
  
  const useStyles = makeStyles({
    root: {
      display: "grid",
      gridTemplateRows: "repeat(1fr)",
      justifyItems: "start",
      ...shorthands.gap("2px"),
    },
  });

export const Dropdowns = ({ option, size, label, appearance}) => {
    const dropdownId = useId("dropdown-grouped");
    const opt = ["Option One", "Option Two", "Option Three", "Option Four"];
    const styles = useStyles();
    return (
        <div className={styles.root}>
        <label id={dropdownId}>{label}</label>
        <Dropdown
          aria-labelledby={dropdownId}
          placeholder={label}
          appearance={appearance}
          size={size}
          {...{disabled}}
        >
          <OptionGroup label={label}>
            {opt.map((option) => (
              <Option key={option} disabled={option === "Option Three"}>
                {option}
              </Option>
            ))}
          </OptionGroup>
        </Dropdown>
      </div>
    );
};


Dropdowns.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  appearance: PropTypes.oneOf(['outline','underline','filled-darker','filled-lighter']),
  disabled: PropTypes.oneOf([ 'disabled', '']),
};

Dropdowns.defaultProps = {
  size: 'medium',
  appearance: 'outline',
  disabled: '',
};


 