
import {  Button, Container, Grid, List, 
    ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';

import {Person, Email, Phone, LocationOn, ShoppingCartCheckout} from "@mui/icons-material";

const UserData = ({userProfile}) => {
    return (
        <Container>
              <Grid container justify="left" spacing={1}>
                  <Grid item xs={12} sm={12} md={6} lg={4} >
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <Person />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Name" secondary={`${userProfile?.firstName} ${userProfile?.lastName}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <Email />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Email" secondary={userProfile?.email} />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <Phone />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Phone Number" secondary={userProfile?.phoneNumber} />
                            </ListItem>
                        </List>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4} >
                       <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <LocationOn />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Address" secondary={`${userProfile?.city}, ${userProfile?.country}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <LocationOn />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Address Line" secondary={`${userProfile?.addressLine1}, ${userProfile?.zipCode}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <ShoppingCartCheckout />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Shipping Information" secondary={`${userProfile?.shippingDivision}, ${userProfile?.shippingOption}`} />
                            </ListItem>
                        </List>
                  </Grid>
              </Grid>
          </Container>
    )
}

export default UserData;