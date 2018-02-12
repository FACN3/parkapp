import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ParkList from './components/ParkList';

render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/parkList" component={ParkList} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
