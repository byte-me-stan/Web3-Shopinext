import React, {useState} from 'react'
import "./userInvoice.css";
import moment from "moment";
import List from "../SellerDashboard/list/List";
import { Modal, Box, Button, Table, 
  TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper} from '@mui/material';
import {useSelector} from "react-redux";
import {useGetUserInvoicesQuery, useGetUserProfilesQuery} from "../../redux/services/apiSlice";
import { invoiceColumns } from '../SellerDashboard/datatablesource';

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: 1,
    p: 4,
  };

const UserInvoices = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const user = useSelector((state) => state.auth.authData);
  const {googleId, givenName, familyName,  email} = user?.result;
  const {data: userProfiles} = useGetUserProfilesQuery();
  const userProfile = userProfiles?.find((profile) => profile?.userId === googleId)
  const id = userProfile?._id;
  const {data: invoices} = useGetUserInvoicesQuery(id);
    
  const getTime = (date) => {
    return moment.utc(date).format("DD MMM, YYYY");
  }

  return (
    <div style={{width: '100%'}}>
      <List row={invoices || []} columns={invoiceColumns} name="Invoice" />
    </div>
  )
}

export default UserInvoices