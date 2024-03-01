import React, { PropsWithChildren } from 'react';

type TextProps = PropsWithChildren;

export const Text: React.FC<TextProps> = (props) => (
  <div {...props}>{props.children}</div>
);
