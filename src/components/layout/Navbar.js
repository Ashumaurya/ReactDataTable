import { AppBar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "2px",
  },
  title: {
    flexGrow: 1,
  },
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className='navbar-wrapper'>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              React Table
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default Navbar;
