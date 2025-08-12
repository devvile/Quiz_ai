import QuestionItem from "./components/quiz/Question";
import { useQuestions } from "../../contexts/QuizContext";
import { useQuizConfig } from "../../contexts/QuizConfigContext";
import { useEffect } from "react";
import Results from "./components/results/Results";

const QuizPage = () => {
  const { pickQuestionsForQuiz, questionsInQuiz, currentQuestion, showResults, restartQuiz } =
    useQuestions();
    const {numberOfQuestions} = useQuizConfig();
  useEffect(() => {
    pickQuestionsForQuiz(numberOfQuestions);
  }, []);

  return (
    <>
      {questionsInQuiz.length > 0 && !showResults ? (
        <QuestionItem question={questionsInQuiz[currentQuestion]} time={10} />
      ) : <Results onRestart={restartQuiz}/>}
    </>
  );
};

export default QuizPage;
