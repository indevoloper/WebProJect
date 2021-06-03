import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Auth";
import firebaseConfig from "../../config";
import "./Head.css";
import logo from "../../img/1.png";
import { SidebarData } from "./SidebarData";
import { Navbar } from "react-bootstrap";


const Head = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
    <div className="fixnav">
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
      </div>
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
    </>
  );
};

export default Head;