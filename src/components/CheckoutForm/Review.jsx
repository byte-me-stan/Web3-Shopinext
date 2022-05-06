import React from "react";

import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { useSelector } from "react-redux";
const Review = () => {
  const cartItems = useSelector(state=> state.cart.cartItems);
    
    let cartTotal = 0;

    for(let i=0; i< cartItems.length; i++){
        cartTotal = cartTotal + cartItems[i]?.totalPrice;
    }


  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>

      <List disablePadding>
        {cartItems.map((product) => (
          <ListItem style={{ padding: "10px 0" }} key={product.name}>
            <ListItemText
              primary={product.name}
              secondary={`Quantity: ${product.quantity}`}
            />
            <Typography variant="body2">
              {product.totalPrice}
            </Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            {cartTotal}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
