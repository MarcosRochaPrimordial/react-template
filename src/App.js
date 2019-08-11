import React from 'react';
import './App.css';
import Sidenav from './pages/sidenav/Sidenav';
import Video from './pages/video/Video';
import Header from './pages/header/Header';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Sidenav />
      <Video />
    </Provider>
  );
}

export default App;
