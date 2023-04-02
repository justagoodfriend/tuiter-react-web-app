import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({
  tuit = {
    topic: "SpaceX",
    userName: "SpaceX",
    time: "2h",
    tuit: "you want to wake up",
    image: "space.png",
    handle: "@spacex",
    liked: false,
    replies: 0,
    retuits: 0,
    likes: 1234,
  },
}) => {
  console.log(tuit.likes);
  const dispatch = useDispatch();
  return (
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
        Likes: {tuit.likes}
        <i
          onClick={() =>
            dispatch(
              updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1,
              })
            )
          }
          className="bi bi-heart-fill me-2 text-danger"
        ></i>
      </div>
      <div className="col-3">
        <i class="bi bi-share-fill"></i>
      </div>
    </div>
  );
};

export default TuitStats;

/*
<i
  className={`bi bi-heart-fill ${tuit.liked ? "color:red" : ""}`}
  style={tuit.liked ? { color: "red" } : { color: "black" }}
></i>
{tuit.likes}
*/
