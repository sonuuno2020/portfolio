import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";

const Hamberger = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <MenuIcon onClick={handleClick} color="secondary" />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Button href="/" color="secondary">
            Home
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button href="/about" color="secondary">
            About
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button
            color="secondary"
            href="https://drive.google.com/file/d/1RHTwdkJT2U8mHhJ9rOYMXOjBvUriapQc/view?usp=sharing"
          >
            Resume
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button href="/project" color="secondary">
            Project
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button href="/contact" color="secondary">
            Contact
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Hamberger;
