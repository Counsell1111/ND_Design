import {  
    shorthands,
    Field,
    Input,
    Button,
    Link,
    Text,
    Textarea,
    Subtitle1,
    Persona, Menu, MenuItem,
    MenuList,
    MenuPopover,
    MenuTrigger,
    SplitButton,
    ButtonProps,
    MenuButtonProps, makeStyles
 } from "@fluentui/react-components";
  import { MoreVertical28Filled } from "@fluentui/react-icons";
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

  const MicButton: React.FC<ButtonProps> = (props) => {
    return (
        <Link>
        Copy Me
      </Link>
    );
  };
  
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
   <Input placeholder="To" size="large" contentAfter={<MicButton aria-label="Enter by voice" />} appearance="outline"/>
  </Field>

  <Field
     label="Subject"
     required
  >
   <Input placeholder="Morgan Brady shared a secure link to “Draft Doc” wit..." size="large" appearance="outline"/>
  </Field>

  <Field label="Default Textarea">
    <Textarea placeholder="Access the document “Draft Doc” v2 of 3 by clicking the link embedded in this email." />
    <div className="text_foot">
    <Button size="large" appearance="subtle" icon={<MoreVertical28Filled />} />
      <div>Draft Doc.doc v2 of 3</div>
      <Link>
        Copy Me
      </Link></div>
  </Field>
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
  