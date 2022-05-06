import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
  cartItemContainer: {
    border: '1px solid #bbb',
    padding: '5px'
  },
  cartItemImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginRight: '20px'
  },
  cartItemInfo: {
    display: 'flex'
  },
  cartItemName: {
    fontSize: '20px',
    fontWeight: '600',
  },
  cartItemActions: {
    display: 'flex',
    justifyContent: 'center',
    
  },
  cartItemQuantity: {
    fontSize: '24px',
    fontWeight: '700',
    marginTop: '-4px',
    marginLeft: '5px',
    marginRight: '5px'
  },
  cartItemTotal: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  removeCartButton: {
    height: '30px',
    color: '#f50057',
    fontSize: '24px'
  }
}));


// cartRoot: {
//   maxWidth: '100%',
//   boxShadow: 'none',
//   border: '1px solid #bbb',
//   padding: '10px'
// },
// media: {
//   height: '600',
// },
// cardContent: {
//   display: 'flex',
//   justifyContent: 'space-between',
// },
// cardActions: {
//   display: 'flex',
//   justifyContent: 'space-between',
// },
// buttons: {
//   display: 'flex',
//   alignItems: 'center',
// },