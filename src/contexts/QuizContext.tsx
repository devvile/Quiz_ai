import { createContext, useContext, useState } from "react";
import type { Question } from "../types/Question";
import { QUESTIONS } from "../data/Questions";

interface QuizContextType {
  currentQuestion: number;
  allQuestions: Question[];
  questionsInQuiz: Question[];
  isLastQuestion: boolean;
  showResults: boolean;
  pickQuestionsForQuiz: (_len: number) => void;
  nextQuestion: () => void;
}

const QuestionsContext = createContext<undefined | QuizContextType>(undefined);

export const QuestionsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [allQuestions] = useState<Question[]>(QUESTIONS);
  const [questionsInQuiz, setQuestionsInQuiz] = useState<Question[]>([]);

  const pickQuestionsForQuiz = (len: number) => {
    const sortRandomly = (arr: Question[]) => {
      const newArr = [...arr];
      for (let i = 0; i < arr.length; i++) {
        let k = Math.floor(Math.random() * arr.length);
        [newArr[i], newArr[k]] = [newArr[k], newArr[i]];
      }
      return newArr;
    };
    if (!allQuestions) return;
    const sortedQuestions = sortRandomly([...allQuestions]);
    const selectedQuestions = sortedQuestions.slice(0, len);
    setQuestionsInQuiz(selectedQuestions);
  };

  const nextQuestion = () => {
    if (currentQuestion == questionsInQuiz.length - 2) {
      setIsLastQuestion(true);
      setCurrentQuestion((prev) => prev + 1);
    } else if (currentQuestion == questionsInQuiz.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const value = {
    currentQuestion,
    allQuestions,
    questionsInQuiz,
    pickQuestionsForQuiz,
    nextQuestion,
    isLastQuestion,
    showResults,
  };

  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  );
};

export const useQuestions = () => {
  const context = useContext(QuestionsContext);
  if (context == undefined) throw new Error("Unable to load context ...");
  return context;
};
