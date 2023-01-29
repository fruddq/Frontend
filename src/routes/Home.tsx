import React from "react";
import { GameList } from "../components/GameList";
import { Link } from "wouter";
import { GameTitle } from "../components/GameTitle";

export const Home: React.FunctionComponent = () => {
  return (
    <div>
      <GameTitle />
      <GameList />
      <Link href="/about">To About</Link>
      <br />
      <Link href="/login">To Login</Link>
    </div>
  );
};
