import React, { useState } from "react";
import { Layout } from "antd";
import TopicMenu from "./components/TopicMenu";
import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import LeadLoans from "./pages/LeadLoans";
import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "./Routes";
import store from "./store";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  let element = useRoutes(routes);

  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {element}
      </LocalizationProvider>
    </Provider>
  );
}
export default App;