function FinishPage({ points, totalPoints, highScore, dispatch }) {
  return (
    <>
      <p className="result">
        {" "}
        You scored {points} out of {totalPoints} (
        {Math.round((points / totalPoints) * 100)}
        %)
      </p>
      <p class="highscore">(Highscore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </>
  );
}

export default FinishPage;
