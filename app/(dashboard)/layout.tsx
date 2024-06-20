import DashBoardLayout from '@/components/Layouts/DashBoardLayout';
import React from 'react';

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <DashBoardLayout>{children}</DashBoardLayout>;
};

export default DashboardLayout;
