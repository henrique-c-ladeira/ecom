import { CircularProgress } from '@nextui-org/react';
import React, { PropsWithChildren } from 'react';

type LoadingProps = PropsWithChildren;

export const Loading: React.FC<LoadingProps> = () => (
  <CircularProgress aria-label="Loading..." />
);
