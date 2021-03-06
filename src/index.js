import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import ParkList from './components/ParkList';
import ParkFullDetails from './components/ParkFullDetails';
import MapComponent from './components/MapComponent';

render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ParkList} />
      <Route
        exact
        path="/parkFullDetails/:park_id"
        component={ParkFullDetails}
      />
      <Route
        ref={window => {
          this.google = window;
        }}
        exact
        path="/map"
        component={MapComponent}
      />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
