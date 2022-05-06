import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import LogoutIcon from "@mui/icons-material/Logout";

const pages = ["channels", "events"];

const NavBar = () => {
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");
    window.location.href = `${window.location.origin}/#/signin`;
  };
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    window.location.href = `${window.location.origin}/#/signin`;
  }
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page}
                href={`#/${page}`}
                sx={{
                  textDecoration: "none",
                  color: "#fff",
                  marginRight: "20px",
                  textTransform: "capitalize",
                }}
              >
                {page}
              </Link>
            ))}
          </Box>

          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Avatar alt="User" src="/static/images/avatar/2.jpg" />
            <LogoutIcon
              sx={{ cursor: "pointer", marginLeft: "10px" }}
              onClick={logout}
            />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
