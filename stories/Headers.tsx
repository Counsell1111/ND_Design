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
  MenuButtonProps, makeStyles } from "@fluentui/react-components";
import { ChevronDown24Regular, List28Filled, Search28Filled } from "@fluentui/react-icons";
import React from 'react';
import './global.css';


const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("2px"),
    maxWidth: "400px",
 },
});


const MicButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      appearance="transparent"
      icon={<ChevronDown24Regular />}
    />
  );
};

export const Header = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
<div className="head_prim">
<div className="head_right">
<div className="right_button">
<Menu positioning="below-end">
        <MenuTrigger disableButtonEnhancement>
          {(triggerProps: MenuButtonProps) => (
            <SplitButton menuButton={triggerProps} appearance="primary">
            Add New
            </SplitButton>
          )}
        </MenuTrigger>

        <MenuPopover>
          <MenuList>
            <MenuItem>Add New</MenuItem>
            <MenuItem>Add New</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
      </div>
      <div className="right_persona">
<Persona
      name="Kevin Sturgis"
      secondaryText="Hi, Kevin!"
      presence={{ status: "available" }}
      avatar={{
        image: {
          src: "https://res-1.cdn.office.net/files/fabric-cdn-prod_20221209.001/office-ui-fabric-react-assets/persona-male.png",
        },
      }}
    />
</div>
  </div>
<div className="head_left">
<div className="left_menu">
<List28Filled />
</div>
<div className="left_logo">
<svg width="40" height="40" viewBox="0 0 301 213" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M137.85 208.77H97.85V131.58C97.85 115.247 96.9967 104.687 95.29 99.9001C93.7834 95.3769 90.8632 91.4576 86.96 88.7201C82.8558 85.9808 78.0025 84.5832 73.07 84.7201C66.4117 84.6334 59.8922 86.6259 54.42 90.4201C49.0536 94.0303 45.0645 99.3479 43.1 105.51C41.0333 111.79 40 123.377 40 140.27V208.77H0V57.5301H37.17V79.7501C50.39 62.6567 67 54.1101 87 54.1101C95.3132 54.007 103.557 55.6313 111.21 58.8801C118.543 62.0668 124.073 66.1267 127.8 71.0601C131.57 76.0426 134.239 81.7689 135.63 87.8601C137.103 94.1268 137.84 103.1 137.84 114.78L137.85 208.77Z" fill="#276DE7"/>
<path d="M300.63 208.77H263.47V186.55C257.29 195.217 250.003 201.65 241.61 205.85C233.754 209.934 225.044 212.103 216.19 212.18C198.81 212.18 183.927 205.18 171.54 191.18C159.153 177.18 152.973 157.647 153 132.58C153 106.953 159 87.4667 171 74.12C183 60.7733 198.24 54.1067 216.72 54.12C233.613 54.12 248.233 61.1467 260.58 75.2V0H300.58L300.63 208.77ZM193.83 129.87C193.83 146.01 196.06 157.677 200.52 164.87C206.98 175.317 216 180.54 227.58 180.54C236.787 180.54 244.62 176.623 251.08 168.79C257.54 160.957 260.767 149.257 260.76 133.69C260.76 116.31 257.627 103.8 251.36 96.16C248.516 92.5087 244.86 89.5714 240.681 87.5819C236.502 85.5924 231.917 84.6056 227.29 84.7C217.803 84.7 209.853 88.4733 203.44 96.02C197.027 103.567 193.823 114.85 193.83 129.87Z" fill="#276DE7"/>
</svg>
</div>
<div className="search_ico">
<Search28Filled />
</div>
<div className="Left_search">
      <Input placeholder="Search Mhub" size="large" contentAfter={<MicButton aria-label="Enter by voice" />} appearance="outline"/>
</div>
  </div>
</div>
</div>
   );
};

Header.propTypes = {
};

Header.defaultProps = {
};
