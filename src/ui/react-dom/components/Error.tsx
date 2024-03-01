import React, { PropsWithChildren } from 'react';

type ErrorProps = PropsWithChildren;

export const Error: React.FC<ErrorProps> = (props) => (
  <div {...props}>error...</div>
);
