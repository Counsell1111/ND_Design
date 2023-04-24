import {  
  Dropdown,
  makeStyles,
  Option,
  OptionGroup,
  shorthands,
  useId,
  DropdownProps, } from "@fluentui/react-components";
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

export const Dropdowns = ({ option, size, label, typer, ...props }) => {
    const dropdownId = useId("dropdown-grouped");
    const land = ["Cat", "Dog", "Ferret", "Hamster"];
    const water = ["Fish", "Jellyfish", "Octopus", "Seal"];
    const styles = useStyles();
    return (
        <div className={styles.root}>
        <label id={dropdownId}>{label}</label>
        <Dropdown
          aria-labelledby={dropdownId}
          placeholder={label}
          appearance={typer}
          size={size}
          {...props}
        >
          <OptionGroup label={label}>
            {land.map((option) => (
              <Option key={option} disabled={option === "Ferret"}>
                {option}
              </Option>
            ))}
          </OptionGroup>
          <OptionGroup label={label}>
            {water.map((option) => (
              <Option key={option}>{option}</Option>
            ))}
          </OptionGroup>
        </Dropdown>
      </div>
    );
};


Dropdowns.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  typer: PropTypes.oneOf(['outline','underline','filled-darker','filled-lighter']),
};

Dropdowns.defaultProps = {
  size: 'medium',
  typer: 'outline',
};


 