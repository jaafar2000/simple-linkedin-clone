    import React, { useContext } from "react";
    import {
    logo,
    searchIcon,
    Home,
    jobs,
    messaging,
    network,
    notifications,
    work,
    } from "../../Assets";
    import { Link } from "react-router-dom";

    import "./header.css";
    import Li from "../lI/Li";
    import { myContext } from "../../context/myContext";

    const Header = () => {
    const { user, sighnOut } = useContext(myContext);
    return (
        <div className="header">
        <div className="header__content">
            <span className="logo">
            <Link to="/home">
                <img src={logo} alt="logo" />
            </Link>
            </span>
            <div className="search">
            <div className="input">
                <input type="text" placeholder="Search" />
            </div>
            <img src={searchIcon} alt="search__icon" />
            </div>
            <div className="nav__menu">
            <ul className="navList__wrap">
                <Li img={Home} title="Home" active={true} />
                <Li img={network} title="Network" />
                <Li img={messaging} title="Messaging" />
                <Li img={jobs} title="Jobs" />
                <Li img={notifications} title="Notifications" />
                <Li
                img={user?.photoURL}
                sighnOut={sighnOut}
                title="Me"
                arrow={true}
                me={true}
                />
                <Li img={work} title="Work" arrow={true} work={true} />
            </ul>
            </div>
        </div>
        </div>
    );
    };

    export default Header;
