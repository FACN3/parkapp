import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import ParkList from './components/ParkList';

render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ParkList} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
