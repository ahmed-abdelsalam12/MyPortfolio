import React from "react";
import "./main.css";
import { myProjects } from "./MyProjects";
import { useState } from "react";
import { AnimatePresence, motion, scale, transform } from "motion/react";
const Main = () => {
  const [arr, setarr] = useState(myProjects);

  const [click, setclick] = useState("all");
  return (
    <div className="main">
      <div className="left-project">
        <ul className="">
          <li>
            <button
              onClick={() => {
                setclick("all");
                setarr(myProjects);
              }}
              className={click === "all" && "active"}
            >
              All projects
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                setclick("html");

                const newarrofhtml = myProjects.filter((item) => {
                  return item.category == "html";
                });

                setarr(newarrofhtml);
              }}
              className={click === "html" && "active"}
            >
              Html & Css{" "}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setclick("react");

                const newarrofreact = myProjects.filter((item) => {
                  return item.category == "react";
                });

                setarr(newarrofreact);
              }}
              className={click === "react" && "active"}
            >
              React
            </button>
          </li>
        </ul>
      </div>
      <div className="right-projects">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.section
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 10, stiffness: 40 }}
                class="card"
              >
                <img src={item.imgPath} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h4 class="card-title"> {item.projectTitle}</h4>
                  <p class="card-text">{item.paragraph}</p>

                  <div style={{ gap: "25px" }} className="icons flex">
                    <a href={item.liveview} target="blank ">
                      <div className=" icon-link"></div>
                    </a>

                    <a href={item.githup} target="blank">
                      <div className="icon-github"></div>
                    </a>
                  </div>
                </div>
              </motion.section>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Main;
