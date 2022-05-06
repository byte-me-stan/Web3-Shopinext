import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 10;

export default makeStyles((theme) => ({
  appBarContainer: {
    boxShadow: `none`,
  },
  appBar: {
     
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
    textDecoration: 'none',
    width: '10%'
  },
  sellerBar: {
   backgroundColor: `red`,
  },
 
  navbarContainer: {
    maxWidth: '1600px',
    marginLeft: 'auto',
  },

  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },

  logoText: {
  },

  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  image: {
    marginRight: `10px`,
    height: '25px',
  }, 

  login: {
    width: '5%'
  },

  loginButton: {
    color: 'white',
    width: '100%',
    float: 'right',
  },

  userPopup: {
    marginTop: '40px'
  },
 
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    borderRadius: '20px',
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },

  searchInput: {
    borderRadius: '20px',
    height: '40px',
    border: 'none',
    paddingLeft: '20px',
    width: '100%',
    fontSize: '20px',
    fontWeight: '500',
    backgroundColor: '#f0f0f0',
  },

  searchIcon: {
    fontSize: `20px !important`,
    height: '42px',
    width: '50px',
    color: 'black',
    position: 'absolute',
    backgroundColor: 'trasparent',
    top: '0',
    right: '0',
    borderRadius: '0 20px 20px 0'
  },
  clearSearch: {
    fontSize: `14px !important`,
    height: '42px',
    width: '50px',
    color: 'black',
    position: 'absolute',
    backgroundColor: 'transparent',
    top: '0',
    right: '0',
    borderRadius: '0 20px 20px 0',
  },

  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  headerCartButton: {
    width: '5%'
  }
}));