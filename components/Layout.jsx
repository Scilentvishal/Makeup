import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="bg-black lg:grid lg:grid-cols-10 relative">
      <div></div>
      <div className="lg:col-span-9">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
