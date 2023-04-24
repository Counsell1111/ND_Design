import {  
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    MenuPopover,
    MenuTrigger, } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';
import './global.css';

export const menubutton = ({ disabled, size, appearance, label }) => {
  return (
   <Menu>
   <MenuTrigger disableButtonEnhancement>
     <MenuButton
       appearance={appearance}
       size={size}
       {...{disabled}}>{label}</MenuButton>
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

menubutton.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  appearance: PropTypes.oneOf(['', 'primary', 'outline', 'subtle', 'transparent']),
  disabled: PropTypes.oneOf([ 'disabled', '']),
};

menubutton.defaultProps = {
  size: 'medium',
  appearance: '',
  disabled: '',
};
