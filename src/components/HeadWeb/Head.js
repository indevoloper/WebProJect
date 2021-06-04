import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Auth";
import firebaseConfig from "../../config";
import "./Head.css";
import logo from "../../img/1.png";
import { SidebarData } from "./SidebarData";
import { Navbar } from "react-bootstrap";
import {GiHamburgerMenu} from 'react-icons/gi'
import {useState} from 'react'
const Head = () => {
  const [showNav,setShowNav] =useState(false)
  return (
    <>
    <header>
      <GiHamburgerMenu onClick ={()=>setShowNav(!showNav)}/>
      Easy Calorie Burn
      </header>
      {showNav && <Navbar/>}
    </>
  );
};

export default Head;