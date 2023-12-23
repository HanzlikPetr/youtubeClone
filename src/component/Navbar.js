import React from "react";
import hamburgerMenu from "../images/hamburger.png";
import youtubeLogo from "../images/youtube.png";
import upload from "../images/icons8-upload-24.png"
import bell from "../images/icons8-bell-24.png"
import profilePicture from "../images/icons8-male-user-24.png"
import "./Navbar.css"

function Navbar() {
  const [search, setSearch] = React.useState("");

  function changeSearch(event) {
    setSearch(() => event.target.value);
  }

  function clearSearch() {
    setSearch(() => "");
  }

  return (
    <nav>
      <div className="logo--menu">
        <img
          src={hamburgerMenu}
          alt="hamburgerMenu"
          className="logo--menu--menuImg"
        />
        <a href="https://www.youtube.com">
          <div className="logo--menu--logoName">
            <img
              src={youtubeLogo}
              alt="youtubeLogo"
              className="logo--menu--logoImg"
            />
            <h1 className="logo--menu--name">YouTube</h1>
          </div>
        </a>
      </div>
      <div className="search--div">
        <input
          type="text"
          placeholder="search"
          className="search--input"
          value={search}
          onChange={changeSearch}
        />
        {search.length > 0 && (
          <button className="clearButton" onClick={clearSearch}>
            X
          </button>
        )}
        <button className="searchButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0,0,256,256"
          >
            <g
              fill="#272727"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              //style="mix-blend-mode: normal"
            >
              <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
            </g>
            <g
              fill="#918c8c"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              //style="mix-blend-mode: normal"
            >
              <g transform="scale(5.12,5.12)">
                <path d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"></path>
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div className="user--div">
        <img src={upload} alt="upload" className="user--upload" />
        <img src={bell} alt="notification" className="user--notificaiton" />
        <img src={profilePicture} alt="profilePicture" className="user--profilePicture" />
      </div>
    </nav>
  );
}

export default Navbar;
