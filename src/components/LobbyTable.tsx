import React from "react";
import { Link } from "wouter";
import { GameTitle } from "./GameTitle";

export const Table: React.FunctionComponent<{
  tableID: number;
}> = ({ tableID }) => (
  <div>
    <GameTitle />
    <nav className="lobby-loggedin-player">Logged in as: *PLAYER* </nav>

    <h2 className="lobby-game-name">This is Table:{tableID}</h2>
    <section className="lobby-game-table">
      <button className="lobby-seat">Empty seat</button>
      <button className="lobby-seat">Empty seat</button>
      <button className="lobby-seat">Empty seat</button>
      <button className="lobby-seat">Empty seat</button>
    </section>
    <section className="lobby-opt-section">
      <button className="lobby-opt-btn">
        <Link href="/">To Home</Link>
      </button>
      <button className="lobby-opt-btn">Escape</button>
      <br />
      <button className="lobby-opt-btn">BTN1 opt</button>
      <button className="lobby-opt-btn">BTN2 opt</button>
    </section>
  </div>
);
