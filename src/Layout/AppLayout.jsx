import { Outlet } from "react-router-dom";
import Header from "./Header";
import "keen-slider/keen-slider.min.css";
import Footer from "./Footer";
import ScrollToTop from "../Components/ScrollToTop";
import WhatsAppIcon from "../Components/WhatAppIcon";

const AppLayout = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <WhatsAppIcon />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
