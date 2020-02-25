//TODO: STEP 1 - Import the useState hook.
import React from "react";
import { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionScore, setLionScore] = useState(32);
  const [tigerScore, setTigerScore] = useState(32);

  function homeTouchDown() {
    setLionScore(lionScore + 7);
  }

  function homeFieldGoal() {
    setLionScore(lionScore + 3);
  }

  function AwayTouchDown() {
    setTigerScore(tigerScore + 7);
  }

  function AwayFieldGoal() {
    setTigerScore(tigerScore + 3);
  }

  // stretch goal, handler function in the component that takes in a team name and an amount.
  function incrementScore(teamName, points) {
    if (teamName === "lions") {
      setLionScore(lionScore + points);
      return;
    }

    if (teamName === "tigers") {
      setTigerScore(tigerScore + points);
      return;
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            onClick={() => {
              incrementScore("lions", 7);
            }}
            className="homeButtons__touchdown"
          >
            Home Touchdown
          </button>
          <button
            onClick={() => {
              incrementScore("lions", 3);
            }}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            onClick={() => {
              incrementScore("tigers", 7);
            }}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button>
          <button
            onClick={() => {
              incrementScore("tigers", 3);
            }}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
