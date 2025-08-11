import QuestionItem from "./components/Question";
import { useQuestions } from "../../contexts/QuizContext";
import { useEffect } from "react";

const QuizPage = () => {
  const { pickQuestionsForQuiz, questionsInQuiz, currentQuestion, showResults } =
    useQuestions();
  useEffect(() => {
    pickQuestionsForQuiz(20);
  }, []);

  console.log(questionsInQuiz);

  return (
    <>
      {questionsInQuiz.length > 0 && !showResults ? (
        <QuestionItem question={questionsInQuiz[currentQuestion]} time={10} />
      ) : <h1>Results</h1>}
    </>
  );
};

export default QuizPage;
