import React from "react";
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
                className={`bi bi-heart-fill ${tuit.liked ? "color:red" : ""}`}
                style={tuit.liked ? { color: "red" } : { color: "black" }}
              ></i>
              {tuit.likes}
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
