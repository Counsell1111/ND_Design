import { shorthands, makeStyles, Button, Tooltip } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';
import {
    TextBoldRegular,
    TextItalicRegular,
    TextUnderlineRegular,
  } from "@fluentui/react-icons";


const useStyles = makeStyles({
    root: {
       display: "flex",
       flexDirection: "column",
       ...shorthands.gap("2px"),
       maxWidth: "400px",
    },
  });

export const tooltip = ({ positioning, appearance, relationship, label, withArrow }) => {

  const styles = useStyles();
  return (
    <div className={styles.root}>
    <Tooltip positioning={positioning} appearance={appearance} content={label} relationship={relationship}  {...{withArrow}}>
    <Button icon={<TextBoldRegular />} />
  </Tooltip>
  <Tooltip positioning={positioning} appearance={appearance} content={label} relationship={relationship}  {...{withArrow}}>
    <Button icon={<TextItalicRegular />} />
  </Tooltip>
  <Tooltip positioning={positioning} appearance={appearance} content={label} relationship={relationship}  {...{withArrow}}>
    <Button icon={<TextUnderlineRegular />} />
  </Tooltip>
  </div>
   );
};

tooltip.propTypes = {
    positioning: PropTypes.oneOf(['above-start','above','above-end','before-top','after-top','before','after','before-bottom','after-bottom','below-start','below','below-end']),
    appearance: PropTypes.oneOf(['inverted','normal']),
    relationship: PropTypes.oneOf(['label','description','inaccessible']),
    withArrow: PropTypes.oneOf([ 'withArrow', '']),
};

tooltip.defaultProps = {
  positioning: 'after',
  appearance: 'normal',
  relationship: 'label',
  withArrow: '',
};
