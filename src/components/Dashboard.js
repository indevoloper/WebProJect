import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import "./Dashboard.css";
import Head from "./HeadWeb/Head";
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const DashBoard = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
      
      <Head/>
      <div className="Block">
        <h1>Welcome to My Web</h1>
        <Link to ="/EditUser">
          <button type="button">Edit User</button>
        </Link>
      </div>
  
    </>
  );
};

export default DashBoard;
