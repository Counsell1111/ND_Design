import {  
    makeStyles,
    tokens,
    MenuList,
    MenuItem,
    Menu,
    MenuPopover,
    MenuTrigger,} from "@fluentui/react-components";
  import React from 'react';
  import PropTypes from 'prop-types';
  import {
    bundleIcon,
    CutRegular,
    CutFilled,
    ClipboardPasteRegular,
    ClipboardPasteFilled,
    EditRegular,
    EditFilled,
  } from "@fluentui/react-icons";
  
  const CutIcon = bundleIcon(CutFilled, CutRegular);
  const PasteIcon = bundleIcon(ClipboardPasteFilled, ClipboardPasteRegular);
  const EditIcon = bundleIcon(EditFilled, EditRegular);
    
  const useMenuListContainerStyles = makeStyles({
    container: {
      backgroundColor: tokens.colorNeutralBackground1,
      minWidth: "128px",
      minHeight: "48px",
      maxWidth: "300px",
      width: "max-content",
      boxShadow: `${tokens.shadow16}`,
      paddingTop: "4px",
      paddingBottom: "4px",
    },
  });
  
  export const menu = ({}) => {
    const styles = useMenuListContainerStyles();
      return (
 <div className={styles.container}>
<MenuList>
<MenuItem icon={<CutIcon />}>Cut</MenuItem>
<MenuItem icon={<PasteIcon />}>Paste</MenuItem>
<MenuItem icon={<EditIcon />}>Edit</MenuItem>
<Menu>
  <MenuTrigger disableButtonEnhancement>
    <MenuItem>Preferences</MenuItem>
  </MenuTrigger>
  <MenuPopover>
    <MenuList>
      <MenuItem icon={<CutIcon />}>Cut</MenuItem>
      <MenuItem icon={<PasteIcon />}>Paste</MenuItem>
      <MenuItem icon={<EditIcon />}>Edit</MenuItem>
    </MenuList>
  </MenuPopover>
</Menu>
</MenuList>
</div>
      );
  };
  
  
menu.propTypes = {

  };
  
menu.defaultProps = {

  };
  
  
   