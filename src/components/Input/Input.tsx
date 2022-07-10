import React from 'react';

import hocWrapper from '../../hoc/hoc';

import { newStateType } from './type';

import './style.css';

const Input = (props: newStateType): JSX.Element => {
  const { newState } = props;
  if (newState.type === 'TextArea') {
    return (
      <label>
        Text Area here -
        <textarea
          style={{
            width: 200,
            height: 400,
            overflowY: 'scroll',
            resize: 'none',
            borderRadius: '5px',
          }}
          placeholder={newState.placeholder}
        />
      </label>
    );
  }
  return (
    <label>
      Input Field here -
      <input
        style={{ borderRadius: '5px' }}
        type={newState.type}
        placeholder={newState.placeholder}
      />
    </label>
  );
};
export default hocWrapper(Input);
