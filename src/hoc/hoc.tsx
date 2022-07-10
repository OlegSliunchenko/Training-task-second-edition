import React, { useEffect } from 'react';

// interface newProps {
//   param1: string;
//   param2: string;
// }

const hocWrapper = (Component: any): any => {
  return (...props: any) => {
    useEffect(() => {
      console.log(`${Component.displayName} was updated with params:`);
      console.log(``);
    });
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  };
};

export default hocWrapper;
