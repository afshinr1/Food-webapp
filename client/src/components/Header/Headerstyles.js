import { fade, makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => {
  return {
    buttonPadding: {
      marginLeft: "10px",
    },
    navbar: {
      backgroundColor: "#0056FF",
    },

    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.black, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.black, 0.25),
      },
      width: "80%",
      [theme.breakpoints.up("sm")]: {
        width: "auto",
      },
    },
    inputRoot: {
      color: "inherit",
    },
    btn: {
      color: "#FFF",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "10%",
      [theme.breakpoints.up("md")]: {
        width: "50ch ",
        height: "auto",
      },
    },
    searchIcon: {
      position: "absolute",
      right: "0",
      height: "auto",
      zIndex: "2",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: "300px",
      height: "300px",
    },
    loginInput: {
      marginBottom: theme.spacing(2),
    },
    signup: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: "300px",
      height: "400px",
    },
  };
});
