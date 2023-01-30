import React from "react";
import { Link } from "wouter";

export const GameTableLandscape: React.FunctionComponent<{}> = () => (
  <div>
    <div className="game-table-info">
      <p className="game-table-infotext">
        Logged in as: *PLAYER* Game:1
        <br />
        Game name: PIKACHU <br />
      </p>
    </div>
    <div className="game-table-menu">
      <button className="game-table-menu-btn">Menu</button>
      {/* OBS: Added class hinden during workflow */}
      <div className="game-table-dropdown hidden">
        <ul className="game-table-links">
          <li>
            <Link href="/">To Home</Link>
          </li>
          <li>Highscore</li>
          <li>Something</li>
          <li>Something</li>
        </ul>
      </div>
    </div>
    <section className="game-table-top"></section>
    <section className="game-table-playing-container">
      <button className="game-table-player">Player 1</button>
      <button className="game-table-player">Player 2</button>
      {/* <button className="game-table-player">Player 3</button> */}
      <button className="game-table-player">Player 4</button>

      <button className="game-table-pass-btn">Pass</button>
      <button className="game-table-play-btn">Play Cards</button>

      <article className="game-table-playing-field">Playing field</article>
    </section>
    <section className="game-table-placeholder-cards">YOUR CARDS HERE</section>
  </div>
);
