import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import ParkList from './components/ParkList';
import ParkFullDetails from './components/ParkFullDetails';
import MapComponent from './components/MapComponent';
import GoogleCon from './components/GoogleCon'

render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ParkList} />
      <Route exact path="/parkFullDetails/:park_id" component={ParkFullDetails} />
      <Route ref={(window)=> {this.google = window}} exact path="/map" component={MapComponent} />
      <Route path="/foo" component={GoogleCon} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// <Route exact path="/parkFullDetails" component={ParkFullDetails} />
// <Route exact path="/parkFullDetails/:park_id" component={ParkFullDetails} />
