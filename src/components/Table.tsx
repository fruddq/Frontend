import React from "react";
import { Link } from "wouter";
import { GameTitle } from "./GameTitle";

export const Table: React.FunctionComponent<{
  tableID: number;
}> = ({ tableID }) => (
  <div>
    <header>
      <GameTitle />
      <nav>Logged in as: *PLAYER* </nav>
    </header>
    <h2>This is Table:{tableID}</h2>
    <section className="lobby-game-table"></section>
    <button>Empty seat</button>
    <button>Empty seat</button>
    <button>Empty seat</button>
    <button>Empty seat</button>

    <section className="lobby-btn-section">
      <button>
        <Link href="/">To Home</Link>
      </button>
      <button>Escape?</button>
      <button>BTN</button>
      <button>BTN</button>
    </section>
  </div>
);
