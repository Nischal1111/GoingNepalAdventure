import React, { ReactNode } from 'react';
import { Divider } from "@nextui-org/react";

const LinedContainer = ({ children }:{children:ReactNode|ReactNode[]}) => {
  return (
    <div className="relative">
      <Divider orientation="vertical" className="absolute left-0 top-0 bottom-0 h-[calc(100%-1rem)]" />
      <div className="pl-6">
        {children}
      </div>
      <Divider className="mt-4" />
    </div>
  );
};

export default LinedContainer;