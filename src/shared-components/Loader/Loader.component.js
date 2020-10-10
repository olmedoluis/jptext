import React from "react";
import { Loading } from "../../assets/icons/Loading.icon";
import "./Loader.styles.css";

export const Loader = ({ text }) => {
  return (
    <div className="loader--wrapper">
      <Loading />
      {text && <p className="loader__text">{text}</p>}
    </div>
  );
};
