import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTuitThunk, updateTuitThunk } from "../../services/tuits-thunks";

const TuitItem = ({
  tuit = {
    topic: "SpaceX",
    username: "SpaceX",
    time: "2h",
    tuit: "you want to wake up",
    image: "space.png",
    handle: "@spacex",
    liked: false,
    disliked: false,
    replies: 123,
    dislikes: 100,
    retuits: 345,
    likes: 1234,
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  //need to make the item liked, and once I unlike it should be back to grey:
  //need state for liked/unliked
  const [liked, setliked] = useState(tuit.liked);
  const [disliked, setdisliked] = useState(tuit.disliked);

  return (
    <div className="list-group-item py-2 border bordersecondary">
      <div className="row">
        <div className="col-1">
          {tuit.image ? (
            <img
              height={48}
              className="rounded-circle"
              alt=""
              src={`/images/${tuit.image}`}
            />
          ) : (
            <img
              height={48}
              className="rounded-circle"
              alt=""
              src={`/images/nasa.png`}
            />
          )}
        </div>
        <div className="col-11">
          <div>
            <i
              className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}
            ></i>
          </div>
          <div>
            <span className="fw-bolder">
              {tuit.username ? tuit.username : "NASA"}
            </span>{" "}
            {tuit.handle ? tuit.handle : "@nasa"} .{" "}
            {tuit.time ? tuit.time : "13h"}
          </div>
          <div>{tuit.tuit}</div>
          <div className="row pt-2">
            <div className="col-2">
              <i class="bi bi-chat-fill"></i>
              {tuit.replies}
            </div>
            <div className="col-2">
              <i class="bi bi-repeat"></i>
              {tuit.retuits}
            </div>
            <div className="col-2">
              {tuit.likes}
              <i
                onClick={() => {
                  setliked(!liked);
                  !liked
                    ? dispatch(
                        updateTuitThunk({
                          ...tuit,
                          likes: tuit.likes + 1,
                          liked: true,
                        })
                      )
                    : dispatch(
                        updateTuitThunk({
                          ...tuit,
                          likes: tuit.likes - 1,
                          liked: false,
                        })
                      );
                }}
                className={`bi bi-heart-fill me-2 ${
                  liked ? "text-danger" : ""
                } `}
              ></i>
            </div>
            <div className="col-2">
              {tuit.dislikes}
              <i
                onClick={() => {
                  setdisliked(!disliked);
                  !disliked
                    ? dispatch(
                        updateTuitThunk({
                          ...tuit,
                          dislikes: tuit.dislikes + 1,
                          disliked: true,
                        })
                      )
                    : dispatch(
                        updateTuitThunk({
                          ...tuit,
                          dislikes: tuit.dislikes - 1,
                          disliked: false,
                        })
                      );
                }}
                className={`bi bi-hand-thumbs-down-fill me-2 ${
                  disliked ? "text-danger" : ""
                } `}
              ></i>
            </div>
            <div className="col-2">
              <i class="bi bi-share-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitItem;
