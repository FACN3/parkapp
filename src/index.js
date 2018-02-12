import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ParkList from './components/ParkList';
import ParkFullDetails from './components/ParkFullDetails';

render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/parkList" component={ParkList} />
      <Route exact path="/parkFullDetails" component={ParkFullDetails} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
