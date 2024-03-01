import React from 'react';

type BoxProps = React.ButtonHTMLAttributes<HTMLDivElement>;

export const Box: React.FC<BoxProps> = (props) => (
  <div {...props}>{props.children}</div>
);
