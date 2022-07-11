import React from 'react';

import { Container } from '@components';
import ArrayTransformer from '@utils/ArrayTransformer';

import './App.css';

const App = (): JSX.Element => {
  const data = [
    {
      id: '2',
      firstName: 'Oleg',
      middleName: 'OLLLLLL',
      lastName: 'SLUNCH',
      address: {
        country: 'UKRAINE',
        city: 'DROHOB',
        district: 'ZEBRA',
        street: 'Gran',
        house: 79,
      },
    },
  ];
  ArrayTransformer(data);

  return (
    <Container className="App">
      <h1>See Console for ArrayTransformer Result</h1>
    </Container>
  );
};

export default App;
