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
import { useEffect, useState } from "react";

interface QuestionProps {
  question: Question;
  time?: number;
}

const QuestionItem = ({ question, time = 20 }: QuestionProps) => {
  const { nextQuestion, isLastQuestion, currentQuestion,questionsInQuiz } = useQuestions();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const intervalId = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, time * 10);
    const timeOutId = setTimeout(() => {
      nextQuestion();
    }, time * 1000);
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeOutId);
    };
  }, [question]);

  return (
    <Card
      sx={{
        p: 4,
        width: 800,
        minHeight: 500, // Minimum height to prevent jumping
        display: "flex",
        flexDirection: "column",
        mx: "auto", // Center the card
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
        <Typography variant="body1">{`${currentQuestion+1}/${questionsInQuiz.length}`}</Typography>
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

        {/* Scrollable answers container */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            minHeight: 200,
          }}
        >
          {question.answers.map((answer, ind) => (
            <Typography key={ind} sx={{ mb: 1, p: 1 }}>
              {answer}
            </Typography>
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
