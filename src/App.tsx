import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import BaseConverter from "./base-converter";
import Sidebar from "./template/Sidebar";
import styled from "styled-components";

const links = [
  { name: "Home", to: "/" },
  { name: "Base Converter", to: "/baseconverter" },
];

const AppBlock = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 100vh;
`;

function App() {
  return (
    <AppBlock className="App">
      <Sidebar links={links} />
      <Switch>
        <Route path="/baseconverter">
          <BaseConverter />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </AppBlock>
  );
}

export default App;
