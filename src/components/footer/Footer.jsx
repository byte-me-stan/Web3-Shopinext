import React from 'react'
import "./footer.css";
import {useGetLogoDataQuery} from "../../redux/services/apiSlice";

const Footer = () => {
  const {data: logoData} = useGetLogoDataQuery();
  const logo = logoData?.find((item) => item._id ==='62601a178676685899526a77');
  return (
    <div className='footer'>
        <p>&copy; {new Date().getFullYear()} {logo ? logo.logoText : 'Shopinext'}, All rights Reserved.</p>
    </div>
  )
}

export default Footer;