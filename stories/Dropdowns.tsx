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
        <label id={dropdownId}>Best pet</label>
        <Dropdown
          aria-labelledby={dropdownId}
          placeholder="Select an animal"
          {...props}
        >
          <OptionGroup label="Land">
            {land.map((option) => (
              <Option key={option} disabled={option === "Ferret"}>
                {option}
              </Option>
            ))}
          </OptionGroup>
          <OptionGroup label="Sea">
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
    typer: PropTypes.oneOf(['primary', 'outline', 'subtle', 'transparent']),

    
  };
  
  Dropdowns.defaultProps = {

  };


 