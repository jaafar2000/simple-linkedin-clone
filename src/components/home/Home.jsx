import React, { useContext } from "react";
import Header from "../header/Header";
import LeftSide from "../LeftSide/LeftSide";
import Main from "../Main/Main";
import RightSide from "../Right/RightSide";
import Login from "../login/Login";
import { myContext } from "../../context/myContext";

import "./home.css";

const Home = () => {
  const { user } = useContext(myContext);
  return (
    <div className="home">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <section className="home__hiring">
            <h5>Hiring in a harry ?</h5>
            <p>
              {" "}
              Find talanted pros in record time with Upwork and keep business
              moving.
            </p>
          </section>
          <div className="layout">
            <LeftSide />
            <Main />
            <RightSide />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
