import React from 'react';

const GreenTag = props => {
  return (
    <div className="tag_container flex justify-between mh3 mb3">
      {props.tags.map((tag, index) => (
        <div
          key={index}
          className="tag1 br2 bg-tag-green white w3 tc f3-ns w4-ns"
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default GreenTag;
