import React from "react";
import "./header.css";

import { useState } from "react";
const Header = () => {
  const [isopen, setisopen] = useState(false);

  return (
    <div className="header">
      <button
        onClick={() => {
          setisopen(true);
        }}
        className="icon-menu menu"
      ></button>

      <nav id="head">
        <ul className="flex">
          <li>
            <a href="#Home">Home</a>
          </li>

          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>

          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>

      {isopen && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setisopen(false);
                }}
              ></button>
            </li>

            <li>
              <a
                href="#Home"
                onClick={() => {
                  setisopen(false);
                }}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#About"
                onClick={() => {
                  setisopen(false);
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                onClick={() => {
                  setisopen(false);
                }}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#Contact"
                onClick={() => {
                  setisopen(false);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
