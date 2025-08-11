import QuestionItem from "./components/Question";
import { useQuestions } from "../../contexts/QuizContext";
import { useEffect } from "react";

const QuizPage = () => {
  const { pickQuestionsForQuiz, questionsInQuiz, currentQuestion } =
    useQuestions();
  useEffect(() => {
    pickQuestionsForQuiz(20);
  }, []);

  console.log(questionsInQuiz);

  return (
    <>
      {questionsInQuiz.length > 0 ? (
        <QuestionItem question={questionsInQuiz[currentQuestion]} />
      ) : null}
    </>
  );
};

export default QuizPage;
