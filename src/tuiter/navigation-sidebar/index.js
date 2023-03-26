import React from "react";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <ul className="list-group">
      <li className={`list-group-item  text-decoration:none`}>
        <i className={`bi bi-twitter d-sm-block color:black`}></i>
      </li>

      <li
        className={`list-group-item ${
          active === "home" ? "active" : ""
        } text-decoration:none`}
      >
        <div className="row">
          <div className="col-3">
            {" "}
            <a
              href="/tuiter/home"
              class="bi bi-house-fill"
              style={{ color: "inherit" }}
            >
              {" "}
            </a>
          </div>
          <div className="col-9 d-sm-none d-md-none d-lg-block d-lg-none d-xl-block">
            {" "}
            Home
          </div>
        </div>
      </li>

      <li
        className={`list-group-item ${
          active === "explore" ? "active" : ""
        } text-decoration:none`}
      >
        <div className="row">
          <div className="col-3">
            <a
              href="/tuiter/explorenew"
              className={`bi bi-hash d-sm-block color:black`}
              style={{ color: "inherit" }}
            >
              {" "}
            </a>
          </div>
          <div className="col-9 d-sm-none d-md-none d-lg-block d-lg-none d-xl-block">
            {" "}
            Explore
          </div>
        </div>
      </li>

      <li
        className={`list-group-item ${
          active === "notifications" ? "active" : ""
        } text-decoration:none`}
      >
        <div className="row">
          <div className="col-3">
            <i class="bi bi-bell-fill"></i>
          </div>
          <div className="col-9 d-sm-none d-md-none d-lg-block d-lg-none d-xl-block">
            {" "}
            Notifications
          </div>
        </div>
      </li>

      <li
        className={`list-group-item ${
          active === "messages" ? "active" : ""
        } text-decoration:none`}
      >
        <div className="row">
          <div className="col-3">
            <i class="bi bi-envelope-fill"></i>
          </div>
          <div className="col-9 d-sm-none d-md-none d-lg-block d-lg-none d-xl-block">
            {" "}
            Messages
          </div>
        </div>
      </li>

      <li
        className={`list-group-item ${
          active === "bookmarks" ? "active" : ""
        } text-decoration:none`}
      >
        <div className="row">
          <div className="col-3">
            <i class="bi bi-bookmark-fill"></i>
          </div>
          <div className="col-9 d-sm-none d-md-none d-lg-block d-lg-none d-xl-block">
            {" "}
            Bookmarks
          </div>
        </div>
      </li>

      <li
        className={`list-group-item ${
          active === "lists" ? "active" : ""
        } text-decoration:none`}
      >
        <div className="row">
          <div className="col-3">
            <i class="bi bi-list-task"></i>
          </div>
          <div className="col-9 d-sm-none d-md-none d-lg-block d-lg-none d-xl-block">
            {" "}
            Lists
          </div>
        </div>
      </li>

      <li
        className={`list-group-item ${
          active === "profile" ? "active" : ""
        } text-decoration:none`}
      >
        <div className="row">
          <div className="col-3">
            <i class="bi bi-person-fill"></i>
          </div>
          <div className="col-9 d-sm-none d-md-none d-lg-block d-lg-none d-xl-block">
            {" "}
            Profile
          </div>
        </div>
      </li>

      <li
        className={`list-group-item ${
          active === "home" ? "more" : ""
        } text-decoration:none`}
      >
        <div className="row">
          <div className="col-3">
            <i class="bi bi-three-dots"></i>
          </div>
          <div className="col-9 d-sm-none d-md-none d-lg-block d-lg-none d-xl-block">
            {" "}
            More{" "}
          </div>
        </div>
      </li>
    </ul>
  );
};

export default NavigationSidebar;
