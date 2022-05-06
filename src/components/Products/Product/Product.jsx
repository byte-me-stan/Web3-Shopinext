import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../../redux/reducers/cartSlice';
import {toast} from "react-toastify";

import useStyles from './styles';

const Product = ({ product}) => {
    
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const {_id, name, mediaUrl, price, description} = product;

    const onAddToCart = () => {
        dispatch(
            addItemToCart({
                id : _id,
                name: name,
                price: Number(price),
                image: mediaUrl,
        })
      )
      toast.success(`${name} added to cart!`);
    }

    return (
     <Card className={classes.root}>
        <CardMedia className={classes.media} image={mediaUrl} title={product.name} />
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant="h5" gutterBottom className={classes.cardName}>
                    {name}
                </Typography>
                <Typography variant="h5" className={classes.cardPrice}>
                    {`$${price}`}
                </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: description}} variant="body2" color="textSecondary" className={classes.cardDesc}/>  
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
        <Link to={`/product/${product._id}`} style={{textDecoration: 'none'}}><Button className={classes.detailButton}>See Details</Button></Link>
            <IconButton aria-label="Add to Cart" onClick={onAddToCart}>
                <AddShoppingCart />
            </IconButton>
        </CardActions>
     </Card>
    );
}

export default Product;


