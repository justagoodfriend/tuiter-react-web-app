import React, { useEffect } from "react";
import TuitItem from "./TuitItem";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks";

const TuitList = () => {
  //const tuitsArray = useSelector((state) => state.tuits);
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(tuits);
  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {tuits.map((tuit) => (
        <TuitItem tuit={tuit} />
      ))}
    </ul>
  );
};
export default TuitList;
