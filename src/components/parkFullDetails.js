import React { Component } from 'react';

class ParkFullDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:6060/api//singlePark')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
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

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      // <ul>
      //   {
      //     items.map(item =>(
      //   <li key={item.name}>
      //       {item.name} {item.price}
      //     </li>
      //   ))
      // }
      // </ul>;
    }
  }
}
export default ParkFullDetails;
