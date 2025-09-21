function Progress({ index, numOfQuestions, points, totalPoints, answer }) {
  console.log(totalPoints);
  return (
    <header className="progress">
      <progress
        max={numOfQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>{`Question ${index + Number(answer !== null)} / ${numOfQuestions}`}</p>

      <p>{`${points} / ${totalPoints}`}</p>
    </header>
  );
}

export default Progress;
