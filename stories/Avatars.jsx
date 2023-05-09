import { Avatar } from "@fluentui/react-components";
import React from 'react';
import PropTypes from 'prop-types';


const useStyles = makeStyles({
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

export const Avatars= ({ }) => {
  const styles = useStyles();
  return (
<Avatar name="Ashley McCarthy" />
   );
};

Avatars.propTypes = {
};

Avatars.defaultProps = {
};
