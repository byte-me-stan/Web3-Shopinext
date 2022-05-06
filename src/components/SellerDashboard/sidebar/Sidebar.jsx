import "./sidebar.css";
import {useState} from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPage } from "../../../redux/reducers/stateSlices";


const Sidebar = () => {
  


  const dispatch = useDispatch();
  const handlePage = (page) => {
    dispatch(setPage(page))
  }
  
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <span className="sidebarLogo">Hosted on IPFS</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li onClick={() => handlePage("home")}>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="sideBarTitle">LISTS</p>
            <li onClick={() => handlePage("userList")}>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
            <li onClick={() => handlePage("productList")}>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          <li onClick={() => handlePage("orders")}>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li onClick={() => handlePage("invoices")}>
            <ReceiptIcon className="icon" />
            <span>Invoices</span>
          </li>
          <p className="title">SETTING</p>
          <li onClick={() => handlePage("profile")}>
            <ArticleOutlinedIcon className="icon" />
            <span>License</span>
          </li>
          <li onClick={() => handlePage("logo")}>
            <DashboardCustomizeIcon className="icon" />
            <span>Customize</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;