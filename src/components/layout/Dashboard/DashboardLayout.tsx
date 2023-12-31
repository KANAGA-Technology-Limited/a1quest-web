import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className='flex bg-[#F3F3F3]'>
        <Sidebar />
        <div className='w-full'>
          <Navbar />
          <main className='min-h-screen w-full px-secondary py-10'>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
