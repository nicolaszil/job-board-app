import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  content: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10} className={classes.content}>{children}</Grid>
      <Grid item xs={1} />
    </Grid>
  );
};
