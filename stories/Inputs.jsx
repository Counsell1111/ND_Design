import {  
    shorthands,
    useId,
    Input,
    Label,
    InputProps, } from "@fluentui/react-components";
import React from 'react';

/**
 * Primary UI component for user interaction
 */
export const Inputs = () => {
    const inputId = useId("input");
  return (
    <div>
    <Label htmlFor={inputId} size={props.size} disabled={props.disabled}>
      Sample input
    </Label>
    <Input id={inputId} {...props} />
  </div>
   );
};