function NextButton({ dispatch, answer, index }) {
  if (answer === null) return null;
  return (
    <div>
      {index < 14 ? (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          next
        </button>
      ) : (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finished" })}
        >
          finish
        </button>
      )}
    </div>
  );
}

export default NextButton;
