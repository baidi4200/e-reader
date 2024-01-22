import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type Props = {};

const MainLayout = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
