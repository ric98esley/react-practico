import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../containers/Layout";

import Home from "../pages/Home";
import CreateAccount from "../pages/CreateAccount";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import NewPassword from "../pages/NewPassword";
import PasswordRecovery from "../pages/PasswordRecovery";
import NotFound from "../pages/NotFound";

import "../styles/global.css";
import SendEmail from "../pages/SendEmail";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
          <Route path="/send-email" element={<SendEmail />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
