import "./newUser.css";
import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { resetUserEditId } from "../../../../redux/reducers/userProfileSlice";
import { setPage } from "../../../../redux/reducers/stateSlices";
import {useGetUserProfileQuery, useAddUserProfileMutation, useUpdateUserProfileMutation } from "../../../../redux/services/apiSlice";
import {toast} from "react-toastify";

const NewUser = () => {
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: '',
    city: '',
    addressLine1: '',
    zipCode: '',
    shippingDivision: '',
    shippingOption: ''
});
  const id = useSelector((state) => state.userProfile.userEditId)
  
  const {data} = useGetUserProfileQuery(id);
  const [addUserProfile] = useAddUserProfileMutation();
  const [updateUserProfile] = useUpdateUserProfileMutation();
  console.log(id);
  console.log(data);

   const dispatch = useDispatch();
    useEffect(() => {
      if(data) setPerson(data)
    }, [id, data]);

    const handleChange =(e) => {
      setPerson((prev ) =>{
        return {...prev, [e.target.name] : e.target.value}
      });
    }

const handleSubmit =async  (e) => {
  e.preventDefault();
  if(id !== null ) {
    await updateUserProfile({id, ...person});
    toast.success("User updated!");
  }
  else {
    await addUserProfile(person);
    toast.success("New User Added!");
  }
  clear();
  //setPage("userList");
  dispatch(setPage("userList"));

}


const clear = () => {
  setPerson({firstName: '', lastName: '', email: '', phoneNumber: '', country: '', city: '', addressLine1: '', zipCode: '', shippingDivision: '', shippingOption: ''});
  dispatch(resetUserEditId());
}

console.log(person);

  return (
    <div className="newUser">
      <div className="newContainer">
        <div className="top">
          <h1>{(id === null) ? 'Add New user' : 'Update User'}</h1>
        </div>
        <div className="bottom">
            <form>
                <div className="formInput">
                  <label>Fisrt Name</label>
                  <input type="text" name="firstName" value={person.firstName} onChange={handleChange} placeholder="" />
                </div>
                <div className="formInput">
                  <label>Last Name</label>
                  <input type="text" name="lastName" value={person.lastName} onChange={handleChange} placeholder="" />
                </div>
                <div className="formInput">
                  <label>Email</label>
                  <input type="text" name="email" value={person.email} onChange={handleChange} placeholder="" />
                </div>
                <div className="formInput">
                  <label>Phone Number</label>
                  <input type="text" name="phoneNumber" value={person.phoneNumber} onChange={handleChange} placeholder="" />
                </div>
                <div className="formInput">
                  <label>Country</label>
                  <input type="text" name="country" value={person.country} onChange={handleChange} placeholder="" />
                </div>
                <div className="formInput">
                  <label>City</label>
                  <input type="text" name="city" value={person.city} onChange={handleChange} placeholder="" />
                </div>
                <div className="formInput">
                  <label>Address line 1</label>
                  <input type="text" name="addressLine1" value={person.addressLine1} onChange={handleChange} placeholder="" />
                </div>
                <div className="formInput">
                  <label>Zip Code</label>
                  <input type="text" name="zipCode" value={person.zipCode} onChange={handleChange} placeholder="" />
                </div>
                <div className="formInput">
                  <label>Shipping Division</label>
                  <input type="text" name="shippingDivision" value={person.shippingDivision} onChange={handleChange} placeholder="" />
                </div>
                <div className="formInput">
                  <label>Shipping Option</label>
                  <input type="text" name="shippingOption" value={person.shippingOption} onChange={handleChange} placeholder="" />
                </div>
            </form>
        </div>
        <button onClick={handleSubmit} style={{display: 'block'}} className="newButton">{(id === null) ? 'Add' : 'Update'}</button>
      </div>
    </div>
  );
};

export default NewUser;