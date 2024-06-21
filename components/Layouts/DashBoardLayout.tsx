'use client';
import Sidebar from '@/components/Sidebar';
import React, { useState } from 'react';
import { ConfirmDialog } from '../Digalog/ConfirmDialog';

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
        <div className="relative w-full flex flex-col overflow-y-auto overflow-x-hidden">
          <main className="mt-[58px]">
            <div className="mx-auto  p-4 md:p-6 2xl:p-10">{children}</div>
          </main>
        </div>
        <ConfirmDialog />
      </div>
    </>
  );
}
