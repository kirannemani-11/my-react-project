import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box, Modal } from "@mui/material";
import Icon from "./Icon";
import Login from "./Login";

import { useNavigate } from "react-router-dom";

function Header(props) {
  const { sections, title, setSelectedSection, selectedSection } = props;
  const [open, setOpen] = React.useState(false); // State variable for managing modal open/close

  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [type, setUserType] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const loggedInState = localStorage.getItem("loggedIn");
    const userNameStored = localStorage.getItem("userName");
    const status1 = localStorage.getItem("status");
    const type2 = localStorage.getItem("type");

    if (loggedInState === "true" && userNameStored) {
      setLoggedIn(true);
      setUserName(userNameStored);
      setUserType(type2);
      setStatus(status1);
    }
  }, [open]);

  const handleLogout = () => {
    setUserName("");
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("status");
    localStorage.removeItem("type");
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section.title);
  };

  const navigate = useNavigate();

  const handlecreatebutton = () => {
    navigate("/logined/createpost");
  };
  const handledeletepost = () => {
    navigate("/deletpost");
  };
  const handledisableuser = () => {};
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        {loggedIn ? (
          <Button size="small" onClick={handlecreatebutton}>
            Create Post
          </Button>
        ) : (
          <></>
        )}
        {type == "Moderator" ? (
          <Button size="small" onClick={handledeletepost}>
            Delete a post
          </Button>
        ) : (
          <></>
        )}
        {type == "Administrator" ? (
          <Button size="small" onClick={handledisableuser}>
            Disable a user
          </Button>
        ) : (
          <></>
        )}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>

        {loggedIn ? (
          <>
            <Icon inputData={userName} />
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Button onClick={handleOpen}>Sign in</Button>
        )}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "50%", // Adjust the width as needed
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Login handleClose={handleClose} />
          </Box>
        </Modal>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Button
            key={section.title}
            onClick={() => setSelectedSection(section.title)}
            color="inherit"
            noWrap
            variant="body2"
            sx={{ p: 1, flexShrink: 0, fontSize: "0.65rem" }}
          >
            {section.title}
          </Button>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  onSectionSelect: PropTypes.func.isRequired,
};

export default Header;
