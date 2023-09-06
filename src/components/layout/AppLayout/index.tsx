import React from 'react';
import Navbar from './Navbar';
import Footer from '../Dashboard/Footer';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
