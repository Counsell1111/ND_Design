import {  
    Menu,
    MenuItem,
    MenuList,
    MenuPopover,
    MenuTrigger,
    SplitButton,
    MenuButtonProps, } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';
import './global.css';

export const splitbutton = ({ disabled, size, appearance, label }) => {
  return (
<Menu positioning="below-end">
<MenuTrigger disableButtonEnhancement>
  {(triggerProps: MenuButtonProps) => (
    <SplitButton
    appearance={appearance}
    size={size}
    menuButton={triggerProps}
    {...{disabled}}>{label}</SplitButton>
  )}
</MenuTrigger>

<MenuPopover>
  <MenuList>
       <MenuItem>Option One</MenuItem>
       <MenuItem>Option Two</MenuItem>
       <MenuItem>Option Three</MenuItem>
       <MenuItem>Option Four</MenuItem>
  </MenuList>
</MenuPopover>
</Menu>
   );
};

splitbutton.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  appearance: PropTypes.oneOf(['', 'primary', 'outline', 'subtle', 'transparent']),
  disabled: PropTypes.oneOf([ 'disabled', '']),
};

splitbutton.defaultProps = {
  size: 'medium',
  appearance: '',
  disabled: '',
};
