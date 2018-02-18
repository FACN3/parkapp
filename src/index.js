import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import ParkList from './components/ParkList';
import ParkFullDetails from './components/ParkFullDetails';
import MapContainer from './components/MapComponent';


render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ParkList} />
      <Route exact path="/parkFullDetails" component={ParkFullDetails} />
      <Route exact path="/map" component={MapContainer} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
