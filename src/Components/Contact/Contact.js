import gsap from "gsap";
import React, { useEffect } from "react";
import Pagenav from "../Nav/Pagenav";
import "./Contact.scss";
const navData = [{ work: "Home" }];
const Contact = () => {
  const animate = () => {
    console.log("RUNNING");
    const tl = gsap.timeline();
    tl.to(".overlay", { height: 0, duration: 0.8, ease: "expo.inOut" });
  };
  return (
    <div className="contact">
      <Pagenav navData={navData} color={"white"} />
      <div className="contact-wrapper">
        <div className="section-left">
          <div className="header-mask">
            <h1>HELLO.</h1>
          </div>
          <div className="description-mask">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              ullam illum iusto aspernatur ut non, nihil cum, tempore deserunt
              at iste quisquam eos eligendi totam. Nam at odit similique
              quibusdam.
            </p>
            <p>
              Email: " <a href="">arnavtiwari100@gmail.com</a>
            </p>
            <p>
              On the Internet: <a href="">LinkedIn</a>/ <a href="">LeetCode</a>/{" "}
              <a href="">GitHub</a>
            </p>
          </div>
        </div>
        <div className="section-right">
          {/* <div className="overlay-wrapper"> */}

          <div className="contact-form" onClick={animate()}>
            <div
              className="overlay"
              onClick={() => {
                animate();
              }}
            ></div>
            Something
            {/* <div className="form">something</div> */}
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Contact;
