import React from 'react';
import GreenTag from './GreenTag';

const SingleParkFromList = props => {
  return (
    <section className="park_container flex flex-column items-center z-0 w-100 flex-row-ns justify-center-ns">
      <div className="first_park bg-light-gray w-80 h5 mt4 br2 w-40-ns vh-40-ns mr5-ns">
        <p className="tc ma3 f3 b">{props.park.parkName}</p>
        <GreenTag tags={props.park.tags} />
        <figure className="image w-70 h-50 mt3 mt4-ns center">
          <img
            src={props.park.picturesUrl.big}
            alt="park pic"
            className="w-100 h-100"
          />
        </figure>
      </div>
    </section>
  );
};

export default SingleParkFromList;
