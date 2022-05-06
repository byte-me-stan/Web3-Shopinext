import "./table.css";
import React, {useState} from "react";
import { useDispatch } from "react";
import { Modal, Box, Button, Table, Menu, 
  TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper,  MenuItem} from '@mui/material';
import Modals from "../modal/Modal";
import {Delete} from "@mui/icons-material";
import moment from "moment";

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

const List = ({orders}) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getTime = (date) => {
    return moment.utc(date).format("DD MMM, YYYY");
  }
  
  

  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Order ID</TableCell>
            <TableCell className="tableCell">Order Details</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((order) => {
            return <TableRow key={order?._id}>
              <TableCell className="tableCell">{order?._id}</TableCell>
              <TableCell className="tableCell">
                <Modals orderItems={order?.orderItems} />
              </TableCell> 
              <TableCell className="tableCell">{order?.shippingAddress?.fullName}</TableCell>
              <TableCell className="tableCell">{getTime(order?.createdAt)}</TableCell>
              <TableCell className="tableCell">{order?.totalPrice}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${order?.status}`}>{order?.orderStatus}</span>
              </TableCell>
            </TableRow>
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;