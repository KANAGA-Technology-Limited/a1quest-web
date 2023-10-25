import React from 'react';
import Navbar from './Navbar';
import Footer from '../Dashboard/Footer';

const AppLayout = ({
  children,
  staticHeader,
}: {
  children: React.ReactNode;
  staticHeader?: boolean;
}) => {
  return (
    <div>
      <Navbar staticHeader={staticHeader} />
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
