'use client';
import Sidebar from '@/components/sidebar';
import React, { useState } from 'react';
import { ConfirmDialog } from '../digalog/ConfirmDialog';
import Header from '../header';

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto  p-6 pt-[50px] z-">{children}</div>
          </main>
        </div>
        <ConfirmDialog />
      </div>
    </>
  );
}
