import React from 'react';
import SingleParkFromList from './SingleParkFromList';
import Navbar from './Navbar';

class ParkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      parks: []
    };
  }

  changeFilter = filterType => {
    debugger;
    let parksCopy = this.state.parks.slice();
    parksCopy.sort((a,b) => { return  b - a});
    this.setState({ parks : parksCopy})
  };

  componentDidMount() {
    fetch('http://localhost:6060/api/allparks')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            parks: result
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

  gettingParks = () => {
    const { error, isLoaded, parks } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section>
          {parks.map(park => (
            <SingleParkFromList key={park.parkId} park={park} />
          ))}
        </section>
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar
          changeFilter={this.changeFilter}
          location={this.props.location.pathname}
        />
        {this.gettingParks()}
      </div>
    );
  }
}

export default ParkList;
