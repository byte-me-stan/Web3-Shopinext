import {  Button, Container, GridDirection, Grid } from '@material-ui/core';

import UserData from './UserData';
import UserOrders from './UserOrders';
import UserInvoices from './UserInvoices';
import React, {useState} from 'react';
import Input from '../auth/Input';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import {useGetUserProfilesQuery, useAddUserProfileMutation, useUpdateUserProfileMutation} from "../../redux/services/apiSlice";
import {toast} from 'react-toastify';
const UserProfile = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.authData);
  const [editUser, setEditUser] = useState(false);
  const [index, setIndex] = useState(0);
  
  const {data: userProfiles} = useGetUserProfilesQuery();
  const [addUserProfile] = useAddUserProfileMutation();
  const [updateUserProfile] = useUpdateUserProfileMutation();

  const {googleId, givenName, familyName,  email} = user?.result;
  const userProfile = userProfiles?.find((profile) => profile?.userId === googleId)
  const id = userProfile?._id;

  const [person, setPerson] = useState({
      userId: googleId,
      firstName: givenName,
      lastName: familyName,
      email: email,
      phoneNumber: '',
      country: '',
      city: '',
      addressLine1: '',
      zipCode: '',
      shippingDivision: '',
      shippingOption: ''
  });

  const handleSubmit = async (e) => {
      e.preventDefault();
      if(!editUser){
        await addUserProfile(person);
        toast.success("UserProfile added!");
      }
      else {
        updateUserProfile({id, ...person});
        toast.success("UserProfile Updated!");
      }
      setEditUser(false);
  }

  const handleChange = (e) => {
      setPerson((prev) => {
          return {...prev,  [e.target.name]: e.target.value};
      });
  };

  const handleEdit =() => {
     setEditUser(true);
      setPerson({
          userId: userProfile?.userId,
          firstName: userProfile?.firstName,
          lastName: userProfile?.lastName,
          email: userProfile?.email,
          phoneNumber: userProfile?.phoneNumber,
          country: userProfile?.country,
          city: userProfile?.country,
          addressLine1: userProfile?.addressLine1,
          zipCode: userProfile?.zipCode,
          shippingDivision: userProfile?.shippingDivision,
          shippingOption: userProfile?.shippingOption
      });
  };

  const ChangePassword = () => {
      return (
        <Grid item xs={12} sm={9} md={6} lg={6} justify="center" spacing={2}>
            <Input name="oldPassword" label="Old password" autoFocus />
            <Input name= "newPassword" label="new Password"  />
            <Input name="confirmPassowrd" label="confirmPassword"  />
            <Button color="primary" variant="contained">Change password</Button>
        </Grid>
      )
  }

  return (
    <Container className={classes.profileContainer} component="main">
        <div className={classes.toolbar} />
            <Grid container justify = "center" spacing={3}>
                <Grid item  xs={12} sm={4} md={3} lg={3} className={classes.buttonsContainer}>
                    <Button  color="primary" variant= {index===0 ? `contained`: 'outlined'}className={classes.profileButtons} onClick={() => setIndex(0)}>Profile</Button>
                    <Button color="primary" variant={index===1 ? `contained`: 'outlined'} className={classes.profileButtons} onClick={() => setIndex(1)}>Change Password</Button>
                    <Button color="primary" variant={index===2 ? `contained`: 'outlined'} className={classes.profileButtons} onClick={() => setIndex(2)}>My Orders</Button>
                    <Button color="primary" variant={index===3 ? `contained`: 'outlined'} className={classes.profileButtons} onClick={() => setIndex(3)}>My Invoices</Button>
                </Grid>
                <Grid item  xs={12} sm={8} md={9} lg={9} style={{display: 'flex'}}>
                    {index===0 && <Grid container justify="center" spacing={2}>
                {(userProfile===undefined || editUser) ? <><Grid item xs={12} sm={12} md={6} lg={6}>
                    <Input type="text" value={person.firstName} name="firstName" label="First Name" handleChange={handleChange} autoFocus />
                    <Input type="text" value={person.lastName} name="lastName" label="Last Name" handleChange={handleChange}  autoFocus />
                    <Input value={person.email} name="email" label="Email" handleChange={handleChange}   />
                    <Input value={person.phoneNumber} name="phoneNumber" label="Phone Number" handleChange={handleChange}   />
                    <Input value={person.country} name="country" label="Country" handleChange={handleChange}   />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Input value={person.city} name="city" label="City" handleChange={handleChange}   />
                    <Input value={person.addressLine1} name="addressLine1" label="Address Line 1"  handleChange={handleChange} />
                    <Input value={person.zipCode} name="zipCode" label="Zip / Postal code"  handleChange={handleChange} />
                    <Input value={person.shippingDivision} name="shippingDivision" label="Shipping Subdivision" handleChange={handleChange}  />
                    <Input value={person.shippingOption} name="shippingOption" label="Shipping Option" handleChange={handleChange}   />
                </Grid></>:
                <UserData userProfile={userProfile}/>}
                {(userProfile===undefined || editUser) ? <Button style={{margin: 'auto'}} color="primary"  variant="contained" onClick={handleSubmit}>Update Profile</Button>:
                <Button  color="primary" variant="contained"  onClick={handleEdit}>Edit Profile</Button>}
            </Grid>}
                    {index===1 && <ChangePassword />}
                    {index===2 && <UserOrders  />}
                    {index===3 && <UserInvoices /> }
                </Grid>
            </Grid>
    </Container>
  );
}

export default UserProfile;