import React from 'react';
import './App.css';
import MatchContainer from './pages/placar/MatchContainer';
import moment from 'moment';

const data = {
  match: {
    date: moment()
  }
};

function App() {
  return (
    <MatchContainer {...data} />
  );
}

export default App;
