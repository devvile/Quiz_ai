import { createContext, useContext, useState } from "react";
import type { Question } from "../types/Question";
import { QUESTIONS } from "../data/Questions";

interface QuizContextType {
  currentQuestion: number;
  allQuestions: Question[];
  questionsInQuiz: Question[];
  pickQuestionsForQuiz: (_len: number) => void;
}

const QuestionsContext = createContext<undefined | QuizContextType>(undefined);

export const QuestionsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
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

  const value = {
    currentQuestion,
    allQuestions,
    questionsInQuiz,
    pickQuestionsForQuiz,
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
