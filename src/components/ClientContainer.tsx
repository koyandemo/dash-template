'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const ClientContainer = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  return <div>{children}</div>;
};

export default dynamic(() => Promise.resolve(ClientContainer), {
  ssr: false,
});
