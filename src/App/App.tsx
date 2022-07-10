import React, { useReducer } from 'react';

import { CheckBox, Container, Input } from '@components';

import { dispatchType, stateType } from './type';

import './App.css';

const initState = {
  type: '',
  placeholder: '',
};
const reducer = (state: stateType, action: dispatchType): stateType => {
  switch (action.type) {
    case 'Inline input':
      return {
        ...state,
        type: 'text',
        placeholder: 'Inline input',
      };
    case 'Input Area':
      return {
        ...state,
        type: 'TextArea',
        placeholder: 'TextArea',
      };
    default:
      return state;
  }
};

const App = (): JSX.Element => {
  const [newState, dispatch] = useReducer(reducer, initState);
  const checkBoxHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.id) {
      case '1':
        return dispatch({ type: 'Inline input' });
      case '2':
        return dispatch({ type: 'Input Area' });
      default:
    }
    return undefined;
  };

  return (
    <Container className="App">
      <CheckBox checkBoxHandler={checkBoxHandler} />
      <Input newState={newState} />
    </Container>
  );
};

export default App;
