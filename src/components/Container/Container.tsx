import React from 'react';

import { ContainerType } from './type';

const Container = ({
  className,
  children
}: ContainerType): JSX.Element => {
  return <div className={className}>{children}</div>;
};
export default Container;
