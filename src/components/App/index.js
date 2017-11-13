import React from 'react';

import Header from '../Header';
import Items from '../../containers/Items';
import './styles.css';


const App = () => {
  return (
    <div className="app">
      <Header />
      <Items />
    </div>
  );
}

export default App;
