import { Typography } from "@mui/material";
import Question from "./components/Question";
import { useQuestions } from "../../contexts/QuizContext";
import { useEffect } from "react";

const QuizPage = () => {
  const {pickQuestionsForQuiz, questionsInQuiz } = useQuestions();
  useEffect(() => {
    pickQuestionsForQuiz(20);
  }, []);
  console.log(questionsInQuiz)

  return (
    <>
      <Typography>QuizPage</Typography>
      <Question />
    </>
  );
};

export default QuizPage;
