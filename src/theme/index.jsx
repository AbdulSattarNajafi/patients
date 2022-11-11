import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Theme = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Theme;
