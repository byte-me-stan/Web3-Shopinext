import React from 'react'
import { useGetUserOrderQuery, useGetUserProfilesQuery } from '../../redux/services/apiSlice';
import List from "../SellerDashboard/list/List";
import { useSelector } from 'react-redux';
import { orderColumns } from '../SellerDashboard/datatablesource';

const UserOrders = () => {
  const user = useSelector((state) => state.auth.authData);
  const {googleId, givenName, familyName,  email} = user?.result;
  const {data: userProfiles} = useGetUserProfilesQuery();
  const userProfile = userProfiles?.find((profile) => profile?.userId === googleId)
  const id = userProfile?._id;
  const {data: orders} = useGetUserOrderQuery(id);
  
  return (
    <div style={{width: '100%'}}>
        <List row={orders || []} columns={orderColumns} name="Invoice"/>
    </div>
  )
}

export default UserOrders;