import React from "react";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "../../services/apiSlice";
import { store } from "../../store";
import Header from "../header/Header";

import "./Layout.css";

const Layout =  ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <Provider store={store}>
      <ApiProvider api={apiSlice}>
        <div className="container">
          <Header />
          {children}
        </div>
      </ApiProvider>
    </Provider>
  );
};

export default Layout;
