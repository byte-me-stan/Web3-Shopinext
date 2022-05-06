import React, { useState } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//import { commerce } from "../../lib/commerce";
import FormInput from "./CustomTextField";
import {useGetUserProfilesQuery, useAddUserProfileMutation, useUpdateUserProfileMutation} from "../../redux/services/apiSlice";
const AddressForm = ({ checkoutToken, next }) => {
  const user = useSelector((state) => state.auth.authData);
  
  const {data: userProfiles} = useGetUserProfilesQuery();
  const [addUserProfile] = useAddUserProfileMutation();
  const [updateUserProfile] = useUpdateUserProfileMutation();
  const {googleId, givenName, familyName,  email} = user?.result;
  const userProfile = userProfiles?.find((profile) => profile?.userId === googleId)
  const id = userProfile?._id;
  console.log(userProfile);
 
  const [shippingData, setShippingData] = useState({
    firstName: userProfile?.firstName || givenName,
    lastName: userProfile?.lastName || familyName,
    email: userProfile?.email || email,
    country: userProfile?.country,
    city: userProfile?.city,
    addressLine1: userProfile?.addressLine1,
    zipCode: userProfile?.zipCode,
    shippingDivision: userProfile?.shippingDivision,
    shippingOption: userProfile?.shippingOption,
});

  const methods = useForm();
  
  const handleChange = (e) => {
    setShippingData((prev)=> {
      return {...prev, [e.target.name]:e.target.value};
    })
  }

  const handleSubmit =async (e) => {
    e.preventDefault();
    if(userProfile===undefined){
      await addUserProfile({userId: googleId, ...shippingData});
    }
    else {
      updateUserProfile({id, ...shippingData});
    }
  }

  const shippingCountry = shippingData.country;
  const shippingSubdivision = shippingData.shippingDivision;
  const shippingOption = shippingData.shippingOption;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form
         onSubmit={methods.handleSubmit((data) =>
          next({
            ...data,
            shippingCountry,
            shippingSubdivision,
            shippingOption
          })
        )}>
          <Grid container spacing={3}>
            <FormInput value={shippingData.firstName} handleChange={handleChange} required name="firstName" label="First Name" />
            <FormInput value={shippingData.lastName} handleChange={handleChange} required name="lastName" label="Last Name" />
            <FormInput value={shippingData.addressLine1} handleChange={handleChange} required name="addressLine1" label="Address Line 1" />
            <FormInput value={shippingData.email} handleChange={handleChange} required name="email" label="Email" />
            <FormInput value={shippingData.city} handleChange={handleChange} required name="city" label="City" />
            <FormInput value={shippingData.zipCode} handleChange={handleChange} required name="zipCode" label="Zip / Postal code" />
            <FormInput value={shippingData.country}  handleChange={handleChange} name="country" label="Shipping Country" />
            <FormInput value={shippingData.shippingDivision} handleChange={handleChange} name="shippingDivision" label="Shipping subdivision"  />
            <FormInput value={shippingData.shippingOption} handleChange={handleChange} name="shippingOption" label="Shipping options"/>
          </Grid>
          <br />
          <Grid container style={{ display: "flex", justifyContent: "space-between" }} >
            <Button component={Link} to="/cart" variant="outlined">
              Back to cart
            </Button>
            <Button type="submit" variant="contained" color="primary" onClick={(userProfile===undefined) && handleSubmit}>
              {(userProfile===undefined) ? 'Add Shipping Info': 'Next'}
            </Button>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
