import React from "react";
import { Link } from "wouter";
import { GameTitle } from "./GameTitle";

export const Table: React.FunctionComponent<{
  tableID: number;
}> = ({ tableID }) => (
  <div>
    <div className="bg-popups hidden"></div>
    <GameTitle />
    <div className="lobby-popup-starting-game hidden">
      <p className="lobby-popup-starting-text">
        Game starting...
        <br />
        Please rotate your phone.
      </p>
    </div>
    <div className="lobby-popup-leaving-game hidden">
      <p className="lobby-popup-leaving-text">
        Are you sure you want to leave?
      </p>
      <button className="lobby-leave-btn lobby-leave-yes-btn">Yes</button>
      <button className="lobby-leave-btn lobby-leave-no-btn">No</button>
    </div>
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
      <button className="lobby-opt-btn">
        <Link to="/GameTable-mobile">Start Game</Link>
      </button>
      <button className="lobby-opt-btn">BTN2 opt</button>
    </section>
  </div>
);
