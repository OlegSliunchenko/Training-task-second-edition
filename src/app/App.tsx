import React from 'react';

import { Container } from '@components';
import SortingFunction from '@utils/SortingFunction';

import './App.css';

const ARR = [
  {
    user: 'zedd',
    age: 48,
    f: 3,
  },
  {
    user: 'barney',
    age: 54,
    f: 4
  },
  {
    user: 'fred',
    age: 40,
    f: 2,
  },
  {
    user: 'barney',
    age: 54,
    f: 1
  },
];
const key = ['user', 'age', 'f'];
const App = (): any => {
  SortingFunction(ARR, key);

  return (
    <Container className="App">
      <h1>Check the console</h1>
    </Container>
  );
};
export default App;
