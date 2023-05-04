import {  
    shorthands,
    Input,
    Button,
    Persona, Menu, MenuItem,
    MenuList,
    MenuPopover,
    MenuTrigger,
    SplitButton,
    ButtonProps,
    MenuButtonProps, makeStyles
 } from "@fluentui/react-components";
  import { ChevronDown24Regular, List28Filled, Search28Filled } from "@fluentui/react-icons";
  import React from 'react';
  import './global.css';
  
  
  const useStyles = makeStyles({
    root: {
      width: "100%",
      top: "0px",
      left: "0px",
      right: "0px",
      height:"32px",
      display: "flex",
      flexDirection: "column",
      ...shorthands.gap("2px"),
      minWidth: "750px",
   },
   innerWrapper: {
    columnGap: "15px",
    display: "flex",
  },
  outerWrapper: {
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
  },
  });
  
  export const Add_Form = () => {
    const styles = useStyles();
    return (
      <div className={styles.root}>
  <div className="addin_form">
  <div className="addin_head">

  </div>

  <div className="addin_foot">
  <Button>{label}</Button>
</div>
  </div>
  </div>
     );
  };
  
  Add_Form.propTypes = {
  };
  
  Add_Form.defaultProps = {
  };
  