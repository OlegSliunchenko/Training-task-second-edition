import React, { ComponentType } from 'react';

const hocWrapper = (Component: ComponentType<any>): ComponentType => {
  // eslint-disable-next-line react-prefer-function-component/react-prefer-function-component
  return class extends React.Component<any, any> {
    componentDidUpdate(prevProps: Readonly<any>): void {
      console.log(prevProps);
      console.log(`${Component.displayName} was updated`);
      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of Object.entries(this.props)) {
        console.log(`${key}: ${value}`);
      }
    }

    render(): JSX.Element {
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <Component {...this.props} />;
    }
  };
};

export default hocWrapper;
