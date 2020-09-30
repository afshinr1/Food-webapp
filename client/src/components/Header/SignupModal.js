import {
  Button,
  Fade,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import "./Header.css";
import { useStyles } from "./Headerstyles";
import Backdrop from "@material-ui/core/Backdrop";
import axios from "axios";

function SignupModal({ openSignup, handleSignupClose }) {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openSignup}
      onClose={handleSignupClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openSignup}>
        <div className={classes.signup}>
          <Typography align="center" variant="subtitle1">
            SIGNUP FORM
          </Typography>
          <form className="signup-form" onSubmit={() => {}}>
            <FormControl required>
              <InputLabel>First name</InputLabel>
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>

            <FormControl required>
              <InputLabel>Last name</InputLabel>
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>

            <FormControl required>
              <InputLabel>Email address</InputLabel>
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl required>
              <InputLabel>Username</InputLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>

            <FormControl required>
              <InputLabel>Password</InputLabel>
              <Input
                className={classes.loginInput}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <FormControl component="fieldset">
              <FormLabel required component="legend">
                Role
              </FormLabel>

              <RadioGroup
                row
                aria-label="position"
                defaultValue="top"
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <FormControlLabel
                  value="customer"
                  control={<Radio color="secondary" />}
                  label="Customer"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="business"
                  control={<Radio color="secondary" />}
                  label="Business"
                  labelPlacement="start"
                />
              </RadioGroup>
            </FormControl>

            <Button
              disabled={
                firstName && lastName && email && username && password && role
                  ? false
                  : true
              }
              color="secondary"
              variant="contained"
              type="submit"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Fade>
    </Modal>
  );
}

export default SignupModal;
