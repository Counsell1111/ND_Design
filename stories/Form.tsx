import {  
    shorthands,
    Field,
    Input,
    Button,
    Link,
    Text,
    Textarea,
    Checkbox,
    Subtitle1,
    Body1,
    Label,
    Persona, Menu, MenuItem,
    MenuList,
    MenuPopover,
    MenuTrigger,
    SplitButton,
    ButtonProps,
    MenuButtonProps, makeStyles
 } from "@fluentui/react-components";
  import { MoreVertical28Filled, Link28Filled, DocumentBulletList24Regular } from "@fluentui/react-icons";
  import React from 'react';
import PropTypes from 'prop-types';
import './global.css';
  
  
  const useStyles = makeStyles({
    root: {
      width: "100%",
      top: "0px",
      left: "0px",
      right: "0px",
      height:"500px",
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
  
  export const Add_Form = ({ addin_head, addin_button }) => {
    const styles = useStyles();
    return (
      <div className={styles.root}>
  <div className="addin_form">

  <div className="addin_head">
  <Subtitle1 align="start">{addin_head}</Subtitle1>
  <Menu>

    <div className="addin_header_button">
    <MenuTrigger disableButtonEnhancement>
    <Button size="large" appearance="subtle" icon={<MoreVertical28Filled />} />
    </MenuTrigger>
    </div>

    <MenuPopover>
      <MenuList>
        <MenuItem>New </MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem disabled>Open File</MenuItem>
        <MenuItem>Open Folder</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
  </div>

  <div className="addin_body">
  <Field
     label="To"
     validationState="none"
     validationMessage="Note that each recipient receives a unique email"
     required
  >
   <Input placeholder="To" size="medium" contentAfter={<Link>Copy Me</Link>} appearance="outline"/>
  </Field>
  <hr className="hr_space"></hr>
  <Field
     label="Subject"
     required
  >
   <Input placeholder="Enter secure link subject" size="medium" appearance="outline"/>
  </Field>
<hr className="hr_space"></hr>

  <Field>
    
    <Textarea rows={5} placeholder="Enter secure link body" />

    <div className="text_foot">
    <Button size="large" appearance="subtle" icon={<Link28Filled />} />
    <div className="doc_foot"><div className="doc_ico"><DocumentBulletList24Regular /></div><Label className="doc_txt">Draft Doc.doc v2 of 3</Label></div>
      <div className="doc_link"><Link>Add Receipt</Link></div>
      </div>

  </Field>

  <hr className="hr_space"></hr>
  <Checkbox 
     size="large" label="Password protect link access"
/>
  <Checkbox 
     size="large" label="Allow linked documents to be downloaded"
/>

  </div>

  <div className="addin_foot">
  <Button appearance="primary" className="addin_button">{addin_button}</Button>
</div>
  </div>
  </div>
     );
  };
  
  Add_Form.propTypes = {
  };
  
  Add_Form.defaultProps = {
  };
  