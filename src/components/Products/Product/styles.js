import { makeStyles } from '@material-ui/core/styles';


export default makeStyles (() => ({
    root: {
    maxWidth: '100%',
    boxShadow: 'none',
    border: '1px solid #bbb',
    padding: '10px'
    },

    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    cardName: {
        fontSize: '16px', 
        
        fontWeight: '400'
    },
    cardPrice: {
        fontSize: '18px',
        fontWeight: '600'
    },
    cardDesc: {
        fontSize: '14px',
        fontWeight: '300'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    detailButton: {
        "&:hover": {
            backgroundColor: '#c5a491'
        },
        backgroundColor: '#ab7a5f',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '10px',
        fontSize: '12px',
        height: '25px',
        textTransform: 'capitalize'
    }
        
}));