import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
            MyChurch
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <NavLink
              style={({ isActive }) => ({
                textDecoration: "none",
                backgroundColor: isActive
                  ? "rgba(255,255,255,0.2)"
                  : "transparent",
              })}
              to="/private/user"
            >
              <Typography variant="h6" color="white" noWrap sx={{ p: 2 }}>
                Kids
              </Typography>
            </NavLink>

            <NavLink
              style={({ isActive }) => ({
                textDecoration: "none",
                backgroundColor: isActive
                  ? "rgba(255,255,255,0.2)"
                  : "transparent",
              })}
              to="/private/rooms"
            >
              <Typography variant="h6" color="white" noWrap sx={{ p: 2 }}>
                Rooms
              </Typography>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;