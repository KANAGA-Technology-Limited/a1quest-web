import React from 'react';
import Navbar from './Navbar';
import Footer from '../Dashboard/Footer';

const AppLayout = ({
  children,
  staticHeader,
  backgroundColor,
}: {
  children: React.ReactNode;
  staticHeader?: boolean;
  backgroundColor?: string;
}) => {
  return (
    <div>
      <Navbar staticHeader={staticHeader} />
      <main
        className='min-h-screen bg-black'
        style={{
          backgroundColor: backgroundColor || '#fff',
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
