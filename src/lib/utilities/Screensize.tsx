"use client";
import React from 'react';
import { useScreenSize } from '../hooks/useScreenSize';

interface ScreenSizeProps {
  children: React.ReactNode;
}

const ScreenSize = ({ children }: ScreenSizeProps) => {
  useScreenSize();

  return <>{children}</>;
};

export default ScreenSize;
