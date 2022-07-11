import React from 'react';

import { Container } from '@components';
import CopyFunction from '@utils/CopyFunction';

import './App.css';

const OBJ = {
  name: 'Oleg',
  age: 30,
  lastName: 'Slunch',
};

const App = (): JSX.Element => {
  CopyFunction(OBJ);
  return (
    <Container className="App">
      <h1>COPYING OBJECT</h1>
    </Container>
  );
};

export default App;
