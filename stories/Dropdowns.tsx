import {  
    Dropdown,
    makeStyles,
    Option,
    shorthands,
    useId,
    DropdownProps, } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';
  
  const useStyles = makeStyles({
    root: {
      // Stack the label above the field with a gap
      display: "grid",
      gridTemplateRows: "repeat(1fr)",
      justifyItems: "start",
      ...shorthands.gap("2px"),
    },
  });

export const Dropdowns = ({ option, size, label, typer, ...props }) => {
    const dropdownId = useId("dropdown-default");
    const options = [
      "Cat",
      "Caterpillar",
      "Corgi",
      "Chupacabra",
      "Dog",
      "Ferret",
      "Fish",
      "Fox",
      "Hamster",
      "Snake",
    ];
    const styles = useStyles();
    return (
        <Dropdown
          aria-labelledby={dropdownId}
          placeholder="Select Option"
          value={option}
          {...props}
        >
          {options.map((option) => (
            <Option value={option} key={option} disabled={option === "Ferret"}>
              {option}
            </Option>
          ))}
        </Dropdown>
    );
};


Dropdowns.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    typer: PropTypes.oneOf(['primary', 'outline', 'subtle', 'transparent']),

    
  };
  
  Dropdowns.defaultProps = {

  };


 