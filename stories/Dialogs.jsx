
import {
    Dialog,
    DialogTrigger,
    DialogSurface,
    DialogTitle,
    DialogContent,
    DialogBody,
    DialogActions,
    Button,
    makeStyles,
  } from "@fluentui/react-components";
  import * as React from "react";
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
    ndbutton: {
      background: "#000",
    },  
  });
  
  export const Dialogs = () => {
    const styles = useStyles();
    const [open, setOpen] = React.useState(false);
    return (
      <Dialog open={open} onOpenChange={(event, data) => setOpen(data.open)}>
        <DialogTrigger disableButtonEnhancement>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              exercitationem cumque repellendus eaque est dolor eius expedita
              nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates
              in natus iure cumque eaque?
            </DialogContent>
            <DialogActions>
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary">Close</Button>
              </DialogTrigger>
              <Button appearance="primary">Do Something</Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    );
  };

Dialogs.propTypes = {
};

Dialogs.defaultProps = {
};
