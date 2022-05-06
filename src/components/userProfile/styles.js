import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles ((theme) => ({
    toolbar: theme.mixins.toolbar,
    profileContainer: {
        maxWidth: '1600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '50px',
        marginBottom: '50px',
        minHeight: '86vh'
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start'
    },
    profileButtons: {
        width: '70%',
        marginBottom: '20px',
        border: '1px solid #3f51b5',
        cursor: 'pointer'
    },
    profileLabel: {
        width: '150px',
        height: '150px',
        backgroundColor: '#333',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px'
    },
    profileImage: {
        border: 'none',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        objectFit: 'contain',
    }
}))