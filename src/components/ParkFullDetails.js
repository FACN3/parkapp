import React, { Component } from 'react';
import Navbar from './Navbar';

class ParkFullDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      parks: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:6060/api/singlePark')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            park: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  gettingFullDetails = () => {
    const { error, isLoaded, park } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1 className="tc">{park.parkName}</h1>
          <h3>Rating: {park.raiting}</h3>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="FullDetails">
        <Navbar />
        {this.gettingFullDetails()}
      </div>
    );
  }
}

export default ParkFullDetails;
