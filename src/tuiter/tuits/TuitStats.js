import React from "react";

const TuitStats = (
  stats = {
    topic: "SpaceX",
    userName: "SpaceX",
    time: "2h",
    tuit: "you want to wake up",
    image: "space.png",
    handle: "@spacex",
    liked: false,
    replies: 123,
    retuits: 345,
    likes: 1234,
  }
) => {
  const item = JSON.stringify(stats);
  return (
    <div>
      <div className="row">
        <div className="col-3">{item.retuits}</div>
        <div className="col-3">{item.replies}</div>
        <div className="col-3">{item.retuits}</div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default TuitStats;
