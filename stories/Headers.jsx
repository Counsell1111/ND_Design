import { makeStyles, Button } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';
import './global.css';

export const Header = () => {
  return (
<div className="head_prim">
 test
<div className="head_right">
<Button 
    appearance="primary"
    size="medium"
    shape="circular"
   >Add New</Button>
  </div>
<div className="head_left">
   test
  </div>
</div>
   );
};

Header.propTypes = {
};

Header.defaultProps = {
};
