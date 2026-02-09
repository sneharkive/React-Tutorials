import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import appStore from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <Navbar />
      <Outlet />
    </Provider>
  );
}

export default App;
