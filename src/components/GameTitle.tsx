import React from "react";
import peaceSign from "../assets/svg/peaceSign.svg";

export const GameTitle: React.FunctionComponent<{}> = () => (
  <header className="game-header">
    <h1 className="big2-title lobby-title">Big </h1>
    <img className="peace-sign" src={peaceSign} alt="peace" />
  </header>
);
