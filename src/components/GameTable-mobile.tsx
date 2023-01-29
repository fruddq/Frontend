import React from "react";
import { Link } from "wouter";


export const GameTable: React.FunctionComponent<{
    tableID: number;
  }> = ({ tableID }) => (
    <>
    <nav>Logged in as: *PLAYER*</br>
    Game:{ tableID } </nav>
    </>
  );