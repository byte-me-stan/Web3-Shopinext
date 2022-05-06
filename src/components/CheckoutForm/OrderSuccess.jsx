import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation , Link} from 'react-router-dom';
import { emptyCart } from '../../redux/reducers/cartSlice';
import { publicRequest } from '../../requestMethod';
import {useGetUserProfilesQuery} from "../../redux/services/apiSlice";

const OrderSuccess = () => {
    const location = useLocation();
    const data = location.state.stripeData;
    const cartItems = location.state.orderItems;
    const total = location.state.total;
    const user = useSelector((state) => state.auth.authData);
    const {data: userProfiles} = useGetUserProfilesQuery();
    const userProfile = userProfiles?.find((profile) => profile?.userId === user?.result?.googleId)
    
    const [orderId, setOrderId] = useState(null);
    const dispatch = useDispatch();
   
    useEffect(() => {
      const createOrder = async() => {
        try {
          const res = await publicRequest.post("/orders", {
              userId: userProfile?._id,
              orderItems: cartItems.map((item) => ({
              name: item.name,
              quantity: item.quantity,
              image: item.image,
              price: item.price,
            })),
            shippingAddress: {
              fullName: `${userProfile?.firstName} ${userProfile?.lastName}`,
              address: userProfile?.addressLine1,
              city: userProfile?.city,
              postalCode: userProfile?.zipCode,
              country: userProfile?.country
            },
            orderStatus: 'Pending',
            totalPrice: total,
          });
          setOrderId(res.data._id);
        } catch (error) {
          console.log(error);
        }
        
      };
      data && createOrder();
      dispatch(emptyCart());
      
    },[cartItems, data, userProfile, dispatch]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Link to="/"><button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button></Link>
    </div>
  )
}

export default OrderSuccess