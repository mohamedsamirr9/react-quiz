import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartPage from "./StartPage";

const initalState = { questions: [], status: "loading" };
function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return { status: "ready", questions: action.payload };
    case "failed":
      return { ...state, status: "error" };

    default:
      throw new Error("Unknow Action");
  }
}

export default function App() {
  const [{ status, questions }, dispatch] = useReducer(reducer, initalState);
  const numOfQuestions = questions.length;
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((err) => dispatch({ type: "failed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "ready" && <StartPage numOfQuestions={numOfQuestions} />}
        {status === "error" && <Error />}
      </Main>
    </div>
  );
}
