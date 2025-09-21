function Options({ question, dispatch, answer }) {
  let answered = answer !== null;
  return (
    <div className="options">
      {question.options.map((opt, index) => (
        <button
          key={index}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            answered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          } `}
          disabled={answered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Options;
