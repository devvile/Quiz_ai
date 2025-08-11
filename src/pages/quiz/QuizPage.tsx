import { Typography, Card } from "@mui/material";
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
    <Card sx={{p:4}}>
      {questionsInQuiz.length>0 ? <QuestionItem question={questionsInQuiz[currentQuestion]}/> : null}
    </Card>
  );
};

export default QuizPage;
