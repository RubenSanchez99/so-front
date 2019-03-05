import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./modules/app/Sidebar";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import { Column, Navbar } from "rbx";
import "rbx/index.css";
import "../node_modules/react-metismenu/dist/react-metismenu-standart.min.css";
import AppRouter from "./modules/app/AppRouter";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPencilAlt, faPlus);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Brand />
        </Navbar>
        <Column.Group>
          <Column size="one-fifth">
            <Sidebar />
          </Column>
          <Column>
            <AppRouter />
          </Column>
        </Column.Group>
      </div>
    );
  }
}

export default App;
