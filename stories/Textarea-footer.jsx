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
    MenuButtonProps, makeStyles } from "@fluentui/react-components";
    import { MoreVertical28Filled, Link28Filled, DocumentBulletList24Regular } from "@fluentui/react-icons";
import React from 'react';
import PropTypes from 'prop-types';
import './global.css';

const useStyles = makeStyles({
    root: {
       display: "flex",
       flexDirection: "column",
       ...shorthands.gap("2px"),
       maxWidth: "400px",
    },
  });

export const textarea_footer = ({ }) => {
    const styles = useStyles();
  return (
    <div className={styles.root}>
  <Field>
    
    <Textarea rows={5} placeholder="Enter secure link body" />

    <div className="text_foot">
    <Button size="large" appearance="subtle" icon={<Link28Filled />} />
    <div className="doc_foot"><div className="doc_ico"><DocumentBulletList24Regular /></div><Label className="doc_txt">Draft Doc.doc v2 of 3</Label></div>
      <div className="doc_link"><Link>Add Receipt</Link></div>
      </div>

  </Field>
  </div>
   );
};


textarea_footer.propTypes = {
    appearance: PropTypes.oneOf(['outline','underline','filled-darker','filled-lighter','filled-darker-shadow','filled-lighter-shadow']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    validate_state: PropTypes.oneOf(['none', 'success', 'warning', 'error']),
    disabled: PropTypes.oneOf([ 'disabled', '']),
    required: PropTypes.oneOf(['required', '']),
  };
  
  textarea_footer.defaultProps = {
    size: 'medium',
    validate_state: 'none',
    disabled: '',
    required: '',
  };