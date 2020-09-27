import {
    Button,
    Fade,
    FormControl,
    Input,
    InputLabel,
    Modal,
    Typography,
  } from "@material-ui/core";
  import React, { useState } from "react";
  import "./Header.css";
  import { useStyles } from "./Headerstyles";
  import Backdrop from "@material-ui/core/Backdrop";
  import axios from "axios";
  
  function SignupModal(props) {
    const classes = useStyles();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const validateUser = (e) => {
      e.preventDefault();
      axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then((data) => {
          const temp = {
            username: "test",
            password: "test",
            email: "test@gmail.com",
            uuid: "123",
            firstName: "John",
            lastName: "Smith",
          }
          sessionStorage.setItem("user", JSON.stringify(temp));
          props.handleUser(temp);
          props.handleLoginClose()
        });
    };  
  
    return (
      <Modal
        className={classes.modal}
        open={props.openLogin}
        onClose={() => props.handleLoginClose()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.openLogin}>
          <div className={classes.paper}>
            <Typography align="center" variant="subtitle1">
              LOGIN FORM
            </Typography>
            <form className="loginForm" onSubmit={validateUser}>
              <FormControl margin="normal" required>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl required>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input
                  className={classes.loginInput}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button
                disabled={email && password ? false : true}
                color="secondary"
                variant="contained"
                type='submit'
              >
                Login
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    );
  }
  
export default SignupModal
