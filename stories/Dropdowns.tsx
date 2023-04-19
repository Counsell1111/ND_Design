import {  
    Select,
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
        <Select
          aria-labelledby={dropdownId}
          placeholder="Select Option"
          {...props}
        >
          {options.map((option) => (
            <Option key={option} value={option} disabled={option === "Ferret"}>
              {option}
            </Option>
          ))}
        </Select>
    );
};


Dropdowns.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    typer: PropTypes.oneOf(['primary', 'outline', 'subtle', 'transparent']),

    
  };
  
  Dropdowns.defaultProps = {

  };


 