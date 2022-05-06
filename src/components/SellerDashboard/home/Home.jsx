import React,{useState, useEffect} from 'react';
import Sidebar from "../sidebar/Sidebar";
import "./home.css";
import Widget from "../widget/Widget";
import Table from "../table/Table";
import List from "../list/List";
import NewProduct from "../new/product/NewProduct";
import NewUser from "../new/user/NewUser";
import {useSelector} from "react-redux";
import {userColumns, productColumns, orderColumns, invoiceColumns} from '../datatablesource';
import {useGetProductsQuery, useGetUserProfilesQuery, useGetOrdersQuery, useGetInvoicesQuery} from '../../../redux/services/apiSlice';
import Logo from "../logo/Logo";
import LicensePage from "../LicensePage";

const Home = () => {
  const page = useSelector((state) => state.states.page);
  const {data:products} = useGetProductsQuery();
  const {data: userProfile} = useGetUserProfilesQuery();
  const {data: orders} = useGetOrdersQuery();
  const {data: invoices} = useGetInvoicesQuery();
  
 
  let orderTotal = 0;
  for(let i =0; i < invoices?.length; i++){
    orderTotal = invoices[i]?.totalPrice + orderTotal;
  }

  const subOrder = orders?.slice(0,9);

  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        {page === 'home' && <>
            <div className="widgets">
              <Widget type="user"  size={userProfile?.length}/>
              <Widget type="order"  size={orders?.length}/>
              <Widget type="totalSales"  size={orderTotal}/>
            </div>
            <div className="listContainer">
              <div className="listTitle">Latest Transactions</div>
              <List row={subOrder || []} columns={orderColumns} name="Invoice"/>
            </div>
          </>}
          {page==="userList" && 
            <List  row={userProfile} columns={userColumns} name="User" />}
          {page ==="productList" && 
            <List row={products} columns={productColumns} name="Product" /> }
          {page==="orders" && 
            <List row={orders} columns={orderColumns} name="Order"/>}
          {page==="invoices" && 
          <List row={invoices} columns={invoiceColumns} name="Invoice" />}
          {page==="newUser" && <NewUser />}
          {page==="newProduct" && <NewProduct />}
          {page==="logo" && <Logo />}
          {page==="profile" && <LicensePage />}
      </div>
    </div>
  );
};


export default Home;