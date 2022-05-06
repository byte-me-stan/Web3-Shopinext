import { makeStyles, fade } from '@material-ui/core/styles';



export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    productDetailContainer: {
        flexGrow: 1,
        maxWidth: '1600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '30px',
        marginBottom: '30px',
        minHeight: '86vh'
    },
    backToProductsButton: {
        "&:hover": {
            backgroundColor: '#c5a491'
        },
        backgroundColor: '#ab7a5f',
        color: 'white'
    },
   
    detailProductImage: {
        width: '100%',
        height: '500px',
        objectFit: 'cover'
        
    },
    smallImages: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px'
    },
    detailProductImg: {
        width: '18%',
        height: '120px',
        objectFit: 'cover'
    },
    root: {
        flexGrow: 1,
      },
      productDetailTitle: {
          fontSize: '60px',
          fontWeight: '600',
      },
      productDetailPrice: {
          fontSize: '30px',
          marginBottom: '20px'
      },
      productPrice: {
        fontWeight: '600',
        color: '#ab7a5f'
      },
      productRating: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '20px !important',
        marginBottom: '20px'
    },
    
    rating: {
        fontSize: '28px !important',
        color: '#f0c14b'
    }, 
    productDetails: {
        display: 'flex',
    },
    productDetailName: {
        width: '120px'
    },
    productDesc: {
        fontSize: '20px',
        textTransform: 'uppercase',
        fontWeight: '600'
    },
    AddToCartProduct: {
        "&:hover": {
            backgroundColor: '#c5a491'
        },
        backgroundColor: '#ab7a5f',
        marginTop: '50px',
        color: 'white'
    }
}));