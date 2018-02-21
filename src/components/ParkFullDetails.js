import React, { Component } from 'react';
import Navbar from './Navbar';
import GreenTag from './GreenTag';
import LikeIcon from '../assets/like.png';
import PlaceIcon from '../assets/place.png';
import GlobeIcon from '../assets/grid-world.png';
import CarIcon from '../assets/car.png';
import '../css/style.css';

class ParkFullDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      park: []
    };
  }

  componentDidMount() {
    fetch(`/api/parks/${this.props.match.params.park_id}`)
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
      return <div>Loading... </div>;
    } else {
      return (
        <div className="grid changa">
          <section className="mt2 mb2">
            <h2 className="black ma0 pt2 pl3">{park.parkName}</h2>
          </section>
          <GreenTag tags={park.tags} />
          <section className="h-100 max-height-45">
            <img
              src={park.picturesUrl.big}
              className="db fr w-75 max-height-45"
              alt="big park"
            />
            <div className="h-100 max-height-45">
              <img
                src={park.picturesUrl.small[0]}
                className="db w-25 h-50 fl-ns"
                alt="small park"
              />
              <img
                src={park.picturesUrl.small[1]}
                className="db w-25 h-50 fl-ns"
                alt="small park"
              />
            </div>
          </section>
          <div>
            <section className="flex mt3">
              <figure className="flex-grow-1">
                <img src={LikeIcon} alt="" />
              </figure>
              <figure className="flex-grow-1">
                <a
                  href={`waze://?ll=${park.parkCoordinates.lat},${
                    park.parkCoordinates.lang
                  }&navigate=yes`}
                >
                  <img src={CarIcon} alt="" />
                </a>
              </figure>
              <figure className="flex-grow-2">
                <a href="/map">
                  <img src={PlaceIcon} alt="" />
                </a>
              </figure>
            </section>
            <section className="bg-park-blue tc v-mid dt w-100">
              <p className="white h2 f4 v-mid f4 ma0 dtc">
                Additional Information
              </p>
            </section>
            <section>
              <figure className="flex-grow-1">
                <img src={GlobeIcon} className="h1 w1 mr2" alt="" />
                <a href="">www.fake-web-site.co.il</a>
              </figure>
            </section>
            <section className="bg-park-blue tc v-mid dt w-100">
              <p className="white h2 f4 v-mid f4 ma0 dtc">Review</p>
            </section>
            <article className="pa3">{park.parkDesc}</article>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="FullDetails">
        <Navbar location={this.props.location.pathname} />
        {this.gettingFullDetails()}
      </div>
    );
  }
}

export default ParkFullDetails;
