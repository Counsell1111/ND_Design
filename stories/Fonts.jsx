import { Text } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';
  
  
  export const text = ({size, weight, align, wrap, font, underline, strikethrough, truncate, italic, label}) => {
      return (
        <Text 
        size={...{size}}
        weight={weight} 
        align={align} 
        wrap={wrap} 
        font={font}
        {...{underline}}
        {...{strikethrough}}
        {...{truncate}}
        {...{italic}}>
            {label}
            </Text>
      );
  };
  
text.propTypes = {
    size: PropTypes.oneOf(['100','200','300','400','500','600','700','800','900','1000']),
    weight: PropTypes.oneOf(['medium','regular','semibold','bold']),
    align: PropTypes.oneOf(['center','start','justify','end']),
    font: PropTypes.oneOf(['base','numeric','monospace']),
    wrap: PropTypes.oneOf(['true', 'false']),
    underline: PropTypes.oneOf([ 'underline', '']),
    strikethrough: PropTypes.oneOf(['strikethrough', '']),
    truncate: PropTypes.oneOf(['truncate', '']),
    italic: PropTypes.oneOf(['italic', '']),
  };
  
text.defaultProps = {
    size: '100',
    weight: 'regular',
    align: 'center',
    font: 'base',
    wrap: 'false',
    italic:'',
    underline: '',
    strikethrough: '',
    truncate:'',
  };
  
  