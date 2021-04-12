import { Grid, makeStyles, Typography } from "@material-ui/core";
import { defineMessages } from "react-intl";

import LogoIcon from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  toggleUser: {
    marginLeft: theme.spacing(1),
  },
  burgerMenu: {
    position: "absolute",
    left: theme.spacing(4),
    boxShadow: "none",
    backgroundColor: "transparent",
  },
}));

const messages = defineMessages({
  title: "Mon CV",
});

export const Header = ({ title }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container alignItems="center">
      <Grid container item xs={3} justify="flex-start">
          <LogoIcon />
      </Grid>

      <Grid container item xs={6} justify="center">
        <Typography variant="h1" color="textPrimary">{title || messages.title}</Typography>
      </Grid>
    </Grid>
  );
};
