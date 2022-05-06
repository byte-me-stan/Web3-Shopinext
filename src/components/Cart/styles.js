import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  cartContainer: {
    minHeight: '88vh', 
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
  cardTitle: {
    marginTop: '10px',
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: '700',
    fontSize: '20px'
  },
  emptyCartContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  subtitle: {
    textAlign: 'center'
  },
  AddEmptyButton: {
    "&:hover": {
      backgroundColor: '#c5a491'
  },
  backgroundColor: '#ab7a5f',
  marginTop: '20px',
  color: 'white',
  margin: 'auto'

  },

  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
    height: '30px'
  },

  checkoutButton: {
    width: '100%',
    height: '30px',
    marginTop: '10px',
    marginBottom: '5px'
  },
 
  cartButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '50px'
  },
  continueShopping: {
    "&:hover": {
      backgroundColor: '#c5a491'
    },
    backgroundColor: '#ab7a5f',
    color: 'white',
    height: '30px'
  },
  cardDetails: {
    width: '240px',
    border: '1px solid #bbb',
    marginTop: '20px',
    marginBottom: '20px',
    padding: '10px',
    alignSelf: 'end'
  },
  cartTotal: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '40px',
    marginTop: '10px'
  }
}));