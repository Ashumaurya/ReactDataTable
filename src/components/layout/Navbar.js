import { AppBar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-wrapper'>
        <AppBar position='static'>
          <MenuIcon />
        </AppBar>
      </div>
    </div>
  );
};

export default Navbar;
