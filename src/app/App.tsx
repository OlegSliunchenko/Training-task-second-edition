import React from 'react';

import { Container } from '@components';
import SortingFunction from '@utils/SortingFunction';

import './App.css';

const ARR = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 34 }
];

const App = (): JSX.Element => {
  SortingFunction(ARR);
  return (
    <Container className="App">
      <h1>Check the console</h1>
    </Container>
  );
};

export default App;
