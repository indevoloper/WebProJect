import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import "./Dashboard.css";
import Navbar from './HeadWeb/Navbar'
import CRUD from './Page/CRUD'


const DashBoard = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Navbar/>
      
      <div className="contanier-fluid"></div>
        <div className = "Block2">
        <CRUD/>
        </div>
        <CRUD/>
      
    </>
  );
};

export default DashBoard;
