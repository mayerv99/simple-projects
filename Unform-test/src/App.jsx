import React from "react";
import UserForm from "./Components/Form/index";
import Topbar from "./Components/Topbar";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Topbar />
      <UserForm />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }
`;

export default App;
