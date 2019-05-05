import React, { Component } from "react";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = props => (
  <>
    <Toolbar />
    <SideDrawer />
    <main className="Content">{props.children}</main>
  </>
);

export default Layout;
