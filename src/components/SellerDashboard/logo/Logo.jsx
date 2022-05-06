import React, {useState, useEffect} from 'react'
import {create} from 'ipfs-http-client';
import {useUpdateLogoMutation, useGetLogoDataQuery, useAddLogoDataMutation} from "../../../redux/services/apiSlice";
import { toast } from 'react-toastify';
import "./logo.css";
const client = create('https://ipfs.infura.io:5001');

const Logo = () => {
    
  const [logoData, setLogoData] = useState({
    logoText: "",
    logoImage: "",
    color: "",
  });
  const [addLogoData] = useAddLogoDataMutation();
  const [updateLogo] = useUpdateLogoMutation();
  const {data} = useGetLogoDataQuery();
  const logo = data?.find(element => element !== undefined);
  const id  = logo?._id;

  useEffect(() => {
    if(logo) {
      setLogoData(logo);
    }
  }, [logo])

  const handleImage =  async (e) => {
    const file = e.target.files[0];

    const res = await fetch('https://bafybeifxlksheu6fwwrsbix75sdodubptoyqfc45js3xcdpenq2cu7d3da.ipfs.infura-ipfs.io/');

    try {
      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`; 
      setLogoData((prev) =>{
        return {...prev, logoImage: url};
      }) 
    } catch (error) {
      console.log(error);
    }
  }

  console.log(logoData.color);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(id !== undefined){
      updateLogo({id, ...logoData});
    }
    else {
      addLogoData(logoData);
    }
    setLogoData({
      logoText: "",
      logoImage: "",
      color: ""
    });
    toast.success("Logo Updated Successfully");
  }
  return (
    <div className="newUser">
    <div className="newContainer">
      <div className="top">
        <h1>Change Logo</h1>
      </div>
      <div className="bottom">
          <form>
          <div className="logoFormInput">
                <label>Logo Text</label>
                <input type="text" name="logoText" value={logoData.logoText} onChange={(e) => setLogoData({...logoData, logoText: e.target.value})} placeholder=""/>
              </div>
              <div className="logoFormInput">
                <label>Logo image</label>
                <input type="file" name="logoImage"  onChange={handleImage}/>
              </div>
              <div className="logoFormInput">
                <label>Logo Image Url</label>
                <input type="text" name="logoImage" value={logoData.logoImage} onChange={(e) => setLogoData({...logoData, logoImage: e.target.value})} placeholder=""/>
              </div>
              <div className="logoFormInput">
                  <label>Titleba Color</label>
                  <input type="color" name="color" value={logoData.color} onChange={(e) =>setLogoData({...logoData, color: e.target.value})}/>
              </div>
              <div className="logoFormInput">
                  <label>Titlebar Color</label>
                  <input type="text" name="color" value={logoData.color} onChange={(e) =>setLogoData({...logoData, color: e.target.value})}/>
              </div>
          </form>
      </div>
      <button typpe="submit" onClick={handleSubmit} className="changeLogoButton">Change</button>
    </div>
  </div>
  )
};

export default Logo;