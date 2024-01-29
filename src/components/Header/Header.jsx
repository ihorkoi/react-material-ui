import {
  AppBar,
  Menu,
  Toolbar,
  IconButton,
  Container,
  Box,
  Tooltip,
  Avatar,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import { Link as RouterLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { useState } from "react";

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  // const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const settings = ["Settings", "Logout"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        position: { xs: "absolute", sm: "static" },
        bottom: { xs: "0px", sm: "none" },
        right: { xs: "0px", sm: "none" },
        top: { xs: "auto", sm: "0px" },
      }}
    >
      <Container>
        <Toolbar>
          <Button
            component={RouterLink}
            to="/"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Logo />
          </Button>

          <Box
            sx={{
              flexGrow: 0,
              ml: "auto",
              display: { xs: "none", sm: "block" },
            }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              justifyContent: "space-between",
              width: "320px",
              margin: "0 auto",
            }}
          >
            <SignalCellularAltIcon />
            <FitnessCenterIcon />
            <PersonIcon />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
