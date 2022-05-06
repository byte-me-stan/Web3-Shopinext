import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  productsContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: theme.spacing(3),
    maxWidth: '1600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: '86vh'
  },
  root: {
    flexGrow: 1,
  },
}));