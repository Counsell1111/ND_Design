import {  
    shorthands,
    Input,
    Button,
    Text,
    Subtitle1,
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
  import PropTypes from 'prop-types';
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
  
  export const Add_Form = (addin_head, label) => {
    const styles = useStyles();
    return (
      <div className={styles.root}>
  <div className="addin_form">
  <div className="addin_head">
  <Subtitle1 align="start">{addin_head}</Subtitle1>
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
  