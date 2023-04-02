import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PostSummaryItem from "./post-summary-item";
import { findTuitsThunk } from "../../services/tuits-thunks";
import { useEffect } from "react";

const PostSummaryList = () => {
  const { tuits } = useSelector((state) => state.tuitsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ul className="list-group">
      {console.log(tuits)}
      {tuits.map((post) => (
        <PostSummaryItem post={post} />
      ))}
    </ul>
  );
};
export default PostSummaryList;
