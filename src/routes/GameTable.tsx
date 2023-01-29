import React from "react";
import { Link } from "wouter";
import { GameTableLandscape } from "../components/GameTable-mobile";

export const GameTable: React.FunctionComponent = () => {
  return (
    <div>
      <GameTableLandscape />
      <Link href="/">To Home</Link>
    </div>
  );
};
