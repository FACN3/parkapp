import React from 'react';
import GreenTag from './GreenTag';

const SingleParkFromList = props => {
  return (
    <section className="park_container flex flex-column items-center z-0 w-100 flex-row-ns justify-center-ns">
      <div className="first_park bg-light-gray w-80 h5 mt4 br2 w-40-ns vh-40-ns mr5-ns">
        <a
          href={`/parkFullDetails/${props.park._id}`}
          className="no-underline black"
        >
          <p className="tc ma2 f3 b f2-l">{props.park.parkName}</p>
        </a>
        <GreenTag tags={props.park.tags} />
        <figure className="image w5 h5 mt3 mt4-ns center">
          <img
            src={props.park.picturesUrl.big}
            alt="park pic"
            className="w-100 h4"
          />
        </figure>
      </div>
    </section>
  );
};

export default SingleParkFromList;
