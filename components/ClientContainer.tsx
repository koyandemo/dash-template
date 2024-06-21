'use client';

import React from 'react';

const ClientContainer = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  return <div>{children}</div>;
};

export default ClientContainer;
