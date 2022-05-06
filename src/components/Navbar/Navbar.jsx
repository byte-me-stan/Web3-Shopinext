import React, {useState, useEffect} from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  InputBase ,
  Typography,
  Button,
  Fade,
} from "@material-ui/core";
import { ShoppingCart, Search, Clear, KeyboardArrowDown} from "@material-ui/icons";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logos from "../../assets/commerce.png";
import useStyles from "./styles";
import { logout } from "../../redux/reducers/authSlice";

import {useGetLogoDataQuery} from "../../redux/services/apiSlice";
const styles = {
  root: {
    flexGrow: 1
  },
  typography: {
    top: "auto",
    bottom: 0,
    textAlign:"center",
  }
};

const Navbar = ({  searchField, setSearchField, anchorEl,setAnchorEl, handleClose, showSearch }) => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.authData);
  const cartTotalQuantity = useSelector(state => state.cart.totalQuantity);
  const history= useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const {data: logoData} = useGetLogoDataQuery();
  const logo = logoData?.find(element => element !== undefined);

  const open = Boolean(anchorEl);
 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
const handleSearch = (e) => {
  setSearchField(e.target.value);
} 

const clear = () => {
  setSearchField("");
}

const handleLogout = () => {
  dispatch(logout());
  history.push("/");
  localStorage.removeItem("userProfile");
}

  return (
    <div>
      {/* <AppBar position="fixed" className={classes.appBar} color="inherit"> */}
      <AppBar position="fixed" color='primary' style={{backgroundColor: logo?.color || '#3f51b5'}} className={classes.appBarContainer}>
          <Toolbar >
            <Typography component={Link} to="/" variant="h6" className={classes.appBar} color="inherit">
                  <div className={classes.logoContainer}>
                  <img
                    src={logo?.logoImage || logos}
                    alt="Shopinext's E-Commerce"
                    className={classes.image}
                  />
                  <p className={classes.logoText}>{logo?.logoText || 'Shopinext'} </p>
                </div>
            </Typography>
              {/* search product */}
            <div className={classes.search}>  
                {(location.pathname ==='/') && <div className={classes.searchBox}>
                  <InputBase  
                    type = "text" 
                    name="searchField"
                    value={searchField}
                    placeholder = "Search Products" 
                    onChange = {handleSearch}
                    className={classes.searchInput} />
                    {searchField && <Clear className={classes.clearSearch} onClick={clear} style={{fontSize: "small"}}/> }
                    {!searchField && <Search className={classes.searchIcon} />}
                </div>}
            </div>
            <div className={classes.grow} />
            {/* userProfile  */}
            <div className={classes.button}>
                {!user ? <Link to="/login" style={{textDecoration: 'none'}}>
                  <Button id = "login-button" className={classes.loginButton} onClick={handleClose}>
                    login
                  </Button>
                </Link>: 
                <div>
                  <Button
                    onClick={handleClick}
                    className={classes.loginButton}
                  >
                    {user?.result?.name?.split(" ")[0]}<KeyboardArrowDown />
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={anchorEl}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    className={classes.userPopup}
                  >
                    <Link to="/userProfile" style={{textDecoration: 'none'}}>
                       <MenuItem onClick={handleClose}>My Profile</MenuItem>
                    </Link>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>}
          </div>     
          <div className={classes.grow} />
            <Link style={{textDecoration: 'none'}} to="/admin"><Button style={{color: 'white', width: '100px'}} color="secondary" >Admin</Button></Link>
            <div className={classes.headerCartButton}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart item"
                color="inherit"
              >
                <Badge badgeContent={cartTotalQuantity} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
