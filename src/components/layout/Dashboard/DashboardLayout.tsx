import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className='flex'>
        <Sidebar />
        <div>
          <Navbar />
          <main className='min-h-screen'>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
