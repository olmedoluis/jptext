import React from "react";
import { Loading } from "../../assets/icons/Loading.icon";
import "./Loader.styles.css"

export const Loader = () => {
  return (
    <div className="loader--wrapper">
      <Loading />
    </div>
  );
};
