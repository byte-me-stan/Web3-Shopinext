import React, {useState} from 'react'
import { Modal, Box, Button, styled} from '@mui/material';
import "./modal.css";
const style = {
    width: 600,
    backgroundColor: 'background.paper',
    boxShadow: 1,
    borderRadius: 5,
    p: 4,
  };

 const StyledModal = styled(Modal)({
     display: "flex",
     alignItems: "center",
     justifyContent: "center"
 });

const Modals = ({items, name}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
        <Button onClick={handleOpen}>See {name} details</Button>
        <StyledModal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            {items?.map((item) => (
                <div className="orderProduct">
                <div className="orderProductTitle">
                    <img src={item.image} alt="tableImg" className="tableImage"/>
                    <p>{item.name}</p>
                </div>
                <p>{item.quantity}</p>
                <p>{`$${item.price * item.quantity}`}</p>
                </div>
            ))}
            </Box>
        </StyledModal>
    </>
  )
}

export default Modals