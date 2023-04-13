import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";
const TuitItem = ({
  tuit = {
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
  },
}) => {
  const [liked, setliked] = useState(tuit.liked);
  const [likes, setLikes] = useState(tuit.likes);
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <div className="list-group-item py-2 border bordersecondary">
      <div className="row">
        <div className="col-1">
          <img
            height={48}
            className="rounded-circle"
            alt=""
            src={`/images/${tuit.image}`}
          />
        </div>
        <div className="col-11">
          <div>
            <i
              className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}
            ></i>
          </div>
          <div>
            <span className="fw-bolder">{tuit.userName}</span> {tuit.handle} .{" "}
            {tuit.time}
          </div>
          <div>{tuit.tuit}</div>
          <div className="row pt-3">
            <div className="col-3">
              <i class="bi bi-chat-fill"></i>
              {tuit.replies}
            </div>
            <div className="col-3">
              <i class="bi bi-repeat"></i>
              {tuit.retuits}
            </div>
            <div className="col-3">
              <i
                onClick={() => {
                  setliked(!liked);
                  !liked ? setLikes(likes + 1) : setLikes(likes - 1);
                }}
                className={`bi bi-heart-fill ${liked ? "color:red" : ""}`}
                style={liked ? { color: "red" } : { color: "black" }}
              ></i>
              {likes}
            </div>
            <div className="col-3">
              <i class="bi bi-share-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitItem;
