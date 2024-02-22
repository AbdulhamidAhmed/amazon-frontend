import React from "react";
import classes from "./loader.module.css";
import { FadeLoader } from "react-spinners";
function Loader() {
  return (
    <div className={classes.loader_container}>
      <FadeLoader color="#36d7b7" />
    </div>
  );
}

export default Loader;
