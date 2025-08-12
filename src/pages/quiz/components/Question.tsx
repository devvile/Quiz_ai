import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  LinearProgress,
  Box,
} from "@mui/material";
import type { Question } from "../../../types/Question";
import { useQuestions } from "../../../contexts/QuizContext";
import { useEffect, useState, useRef } from "react";
import Answer from "./Answer";

interface QuestionProps {
  question: Question;
  time?: number;
}

const QuestionItem = ({ question, time = 20 }: QuestionProps) => {
  const {
    nextQuestion,
    isLastQuestion,
    currentQuestion,
    questionsInQuiz,
    handleAnswerSelection,
    showAnswers,
    isCorrect,
    selectedAnswer,
    resetQuestion
  } = useQuestions();
  
  const [progress, setProgress] = useState(0);
  
  // Use number type for browser timers
  const progressIntervalRef = useRef<number | null>(null);
  const nextQuestionTimeoutRef = useRef<number | null>(null);
  // Function to clear all existing timers
  const clearAllTimers = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
    if (nextQuestionTimeoutRef.current) {
      clearTimeout(nextQuestionTimeoutRef.current);
      nextQuestionTimeoutRef.current = null;
    }
  };

  // Initial question timer effect
  useEffect(() => {
    resetQuestion();
    setProgress(0);
    // Clear any existing timers first
    clearAllTimers();
    
    // Start progress timer
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, time * 10);
    
    // Start next question timer
    nextQuestionTimeoutRef.current = setTimeout(() => {
      nextQuestion();
    }, time * 1000);

    return clearAllTimers; // Cleanup on unmount or question change
  }, [question]);

  // Effect when user selects an answer
  useEffect(() => {
    if (showAnswers) {
      // Clear existing timers
      clearAllTimers();
      
      // Start new 3-second timer for next question
      nextQuestionTimeoutRef.current = setTimeout(() => {
        resetQuestion();
        nextQuestion();
      }, 3000);
    }
  }, [showAnswers]);

  const handleAnswerSelect = (optionId: number) => {
    handleAnswerSelection(optionId);
  };

  return (
    <Card
      sx={{
        p: 4,
        width: 800,
        minHeight: 500,
        display: "flex",
        flexDirection: "column",
        mx: "auto",
      }}
    >
      <CardHeader sx={{ flexShrink: 0 }} />
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        <Typography variant="body1">{`${currentQuestion + 1}/${
          questionsInQuiz.length
        }`}</Typography>
        <Typography sx={{ mb: 2 }} variant="h4">
          {question.question}
        </Typography>

        <LinearProgress
          variant="determinate"
          sx={{
            mb: 2,
            "& .MuiLinearProgress-bar": {
              transition: "transform 0.15s ease-out !important",
            },
          }}
          value={progress}
        />
        <Divider sx={{ mb: 2 }} />

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            minHeight: 200,
          }}
        >
          {question.answers.map((answer, ind) => (
            <Answer
              answerIndex={ind}
              answer={answer}
              key={ind}
              onSelect={handleAnswerSelect}
              showAnswers={showAnswers}
              selectedAnswer={selectedAnswer}
              isCorrect={isCorrect}
              correctAnswer={question.correctAnswer}
            />
          ))}
        </Box>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexShrink: 0,
          mt: "auto",
        }}
      >
        <div></div>
        {!isLastQuestion && (
          <Button onClick={nextQuestion} variant="outlined">
            NEXT
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default QuestionItem;