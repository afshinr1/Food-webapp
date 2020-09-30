import React, { useState, useEffect } from "react";
import LoginModal from "./LoginModal";
import {
  AppBar,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Sidebar from "../Sidebar/Sidebar";
import { useStyles } from "./Headerstyles";
import SignupModal from "./SignupModal";

function Header() {
  const [user, setUser] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const classes = useStyles();

  const handleLoginOpen = () => {
    setOpenLogin(true);
  };

  const handleLoginClose = () => {
    setOpenLogin(false);
  };
  const handleSignupClose = () => {
    setOpenSignup(false);
  };
  const handleSignupOpen = () => {
    setOpenSignup(true);
  };
  const handleUser = (data) => {
    setUser(data);
  };
  const handleLogout = (e) => {
    sessionStorage.removeItem("user");
    setUser(null);
  };
  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("user")));
  }, []);

  return (
    <AppBar position="static" color="primary" className={classes.navbar}>
      <Toolbar>
        <Grid container direction="row">
          <Grid container alignItems="center" item xs={4}>
            <Sidebar />
            <Typography variant="h6">Jaja</Typography>
          </Grid>
          <Grid className={classes.search} item xs={4}>
            <IconButton className={classes.searchIcon}>
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </Grid>
          <Grid container item xs={4} justify="flex-end">
            {user ? (
              <Button
                color="secondary"
                variant="contained"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  variant="outlined"
                  onClick={handleLoginOpen}
                  className={classes.btn}
                >
                  Login
                </Button>
                <LoginModal
                  handleUser={handleUser}
                  openLogin={openLogin}
                  handleLoginClose={handleLoginClose}
                />
                <SignupModal
                  handleSignUp={handleUser}
                  openSignup={openSignup}
                  handleSignupClose={handleSignupClose}
                />

                <Button
                  className={`${classes.buttonPadding} ${classes.btn}`}
                  variant="outlined"
                  onClick={handleSignupOpen}
                >
                  Sign up
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
