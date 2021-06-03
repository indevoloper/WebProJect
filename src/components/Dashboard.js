import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config";
import "./Dashboard.css";
import { Navbar } from "react-bootstrap";
import logo from "../img/1.png";
import { SidebarData } from "./SidebarData";

const DashBoard = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Navbar bg="mycolor" variant="dark">
        <Navbar.Brand>
          <img src={logo} width="40" />
          &nbsp;Easy Calorie Burn
        </Navbar.Brand>
        <div className="boxx">
          <button
            onClick={() => firebaseConfig.auth().signOut()}
            class="button1"
          >
            ออกจากระบบ
          </button>
        </div>
      </Navbar>
      <div className="sidebar">
        <ul className="SidebarList">
          {SidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className="row"
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >    
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="Block">
        <h1>Welcome to My Web</h1>
      </div>
      <div className="Block1">
        <h1>Welcome to My web</h1>
      </div>
    </>
  );
};

export default DashBoard;
