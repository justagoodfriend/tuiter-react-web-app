import React from "react";
import { useSelector } from "react-redux";

//when component loads-> reducers pass their data in a useSelector,
//extract the contents from it,

//need to use the state keyword i guess
const HelloReduxExampleComponent = () => {
  const message = useSelector((state) => state.hello.message);
  return <h3>{message}</h3>;
};

export default HelloReduxExampleComponent;
