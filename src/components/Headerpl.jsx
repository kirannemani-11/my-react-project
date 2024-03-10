import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box, Modal } from "@mui/material";
import Login from "./Login";
import Icon from "./Icon";
import { useLocation } from "react-router-dom";
import CreatePost from "./Creatingpost";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { sections, title, setSelectedSection, selectedSection } = props;
  const [open, setOpen] = React.useState(false); // State variable for managing modal open/close

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section.title);
  };

  const handlecreatebutton = () =>{
    navigate("/logined/createpost");
  }
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button size="small" onClick={handlecreatebutton}>Create Post</Button>
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
        <Icon inputData={location.state.inputData.name}/>
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
            <Login />
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
