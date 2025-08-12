import { createContext, useContext, useState } from "react";

export interface QuizConfigContextType {
  numberOfQuestions: number;
  questionDuration: number;
}

const QuizConfigContext = createContext<undefined | QuizConfigContextType>(
  undefined
);

export const QuizConfigContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [questionDuration, setQuestionDuration] = useState(10);
  const value = {
    numberOfQuestions,
    questionDuration,
  };
  return (
    <QuizConfigContext.Provider value={value}>
      {children}
    </QuizConfigContext.Provider>
  );
};

export const useQuizConfig = ()=>{
    const context = useContext(QuizConfigContext);
    if(context==undefined) throw new Error("Error Loading Quiz Config ....");
    return context;
}
