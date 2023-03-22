import React from "react";
import { Link } from "react-router-dom";
import "./Pagenav.scss";
const Pagenav = ({ navData }) => {
  console.log(navData);
  return (
    <div className="page-nav">
      {Object.entries(navData).map((item) => {
        return (
          <div className="page-nav-item">
            <Link to="/" className="page-nav-link">
              {/* {console.log("ITEM", item)}
              {console.log(item[1].work)} */}
              {item[1].work}
            </Link>
          </div>
        );
      })}
      <div className="page-nav-line"></div>
      <div className="page-nav-item nav-copyright">
        <div className="copyright">@/2023</div>
      </div>
      {/* <div className="left-nav-item">
      <a href="" className="left-nav-link">
        LC
      </a>
    </div>
    <div className="left-nav-item">
      <a
        href=""
        target="_blank"
        className="left-nav-link"
        onClick={() => f()}
      >
        GH
      </a>
    </div>
    <div className="left-nav-item">
      <a href="" className="left-nav-link">
        HR
      </a>
    </div>
    <div className="left-nav-item">
      <a href="" className="left-nav-link">
        CF
      </a>
    </div>
    <div className="left-nav-line"></div>
    <div className="left-nav-item nav-copyright">
      <div className="copyright">@/2023</div>
    </div> */}
    </div>
  );
};

export default Pagenav;
