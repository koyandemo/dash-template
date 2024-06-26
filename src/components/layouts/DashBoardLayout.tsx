'use client';
import Sidebar from '@/components/sidebar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { ConfirmDialog } from '../digalog/ConfirmDialog';
import Header from '../header';
import Text from '../typography/Text';

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (status !== 'loading') {
      if (status === 'unauthenticated') {
        router.push('/sign-in');
      } else {
        setLoading(false);
      }
    }
  }, [session]);

  return (
    <div>
      {!loading ? (
        <div className="flex h-screen overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
              <div className="mx-auto  p-6 pt-[50px]">{children}</div>
            </main>
          </div>
          <div>
            <ConfirmDialog />
          </div>
        </div>
      ) : (
        <Text label="Loading..." size="sm" />
      )}
    </div>
  );
}
