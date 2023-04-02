import React from "react";
import TuitsList from "../tuits/TuitList";
import WhatsHappening from "./whats-happening";
import Nav from "../../nav";
import NavigationSidebar from "../navigation-sidebar";
import WhoToFollowList from "../who-to-follow-list";
import whoReducer from "../reducers/who-reducer";
import tuitsReducer from "../reducers/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: { who: whoReducer, tuitsData: tuitsReducer },
});

const HomeComponent = () => {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <div className="row mt-2">
          <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar active="home" />
          </div>
          <div
            className="col-10 col-md-10 col-lg-7 col-xl-6"
            style={{ position: "relative" }}
          >
            <WhatsHappening />
            <TuitsList />
          </div>
          <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList />
          </div>
        </div>
      </div>
    </Provider>
  );
};
export default HomeComponent;

/*
    <>
      <h4>Home</h4>
      <WhatsHappening />
      <TuitsList />
    </>
*/
