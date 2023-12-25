import React from "react";
import "./Sidebar.css";
import subcripbe from "../images/folder.png"
import camera from "../images/video-camera.png"

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
      <div className="sd-body">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0,0,256,256"
          //style="fill:#FFFFFF;"
        >
          <g
            fill-opacity="0"
            fill="#272727"
            //fill-rule="nonzero"
            //stroke="none"
            //stroke-width="1"
            //stroke-linecap="butt"
            //stroke-linejoin="miter"
            //stroke-miterlimit="10"
            //stroke-dasharray=""
            //stroke-dashoffset="0"
            //font-family="none"
            //font-weight="none"
            //font-size="none"
            //text-anchor="none"
            //style="mix-blend-mode: normal"
          >
            <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
          </g>
          <g
            fill="#ffffff"
            //fill-rule="nonzero"
            //stroke="none"
            //stroke-width="1"
            //stroke-linecap="butt"
            //stroke-linejoin="miter"
            //stroke-miterlimit="10"
            //stroke-dasharray=""
            //stroke-dashoffset="0"
            //font-family="none"
            //font-weight="none"
            //font-size="none"
            //text-anchor="none"
            //style="mix-blend-mode: normal"
          >
            <g transform="scale(5.12,5.12)">
              <path d="M25,1.05078c-0.2175,0 -0.43414,0.06898 -0.61914,0.20898l-23,17.95117c-0.43,0.34 -0.50992,0.9682 -0.16992,1.4082c0.34,0.43 0.9682,0.50992 1.4082,0.16992l1.38086,-1.07812v26.28906c0,0.55 0.45,1 1,1h14v-18h12v18h14c0.55,0 1,-0.45 1,-1v-26.28906l1.38086,1.07812c0.19,0.14 0.39914,0.21094 0.61914,0.21094c0.3,0 0.58906,-0.13086 0.78906,-0.38086c0.34,-0.44 0.26008,-1.0682 -0.16992,-1.4082l-23,-17.95117c-0.185,-0.14 -0.40164,-0.20898 -0.61914,-0.20898zM35,5v1.05078l6,4.67969v-5.73047z"></path>
            </g>
          </g>
        </svg>
        <img src={subcripbe} alt="subcribe" />
        <img src={camera} alt="camera" />
      </div>
    </div>
  );
}
export default Sidebar;
