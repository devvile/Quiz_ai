import {
  Card,
  Button,
  Typography,
  Divider,
  Box,
  LinearProgress,
} from "@mui/material";
import { useQuestions } from "../../../../contexts/QuizContext";
import { useQuizConfig } from "../../../../contexts/QuizConfigContext";
import AnswersSummary from "./AnswersSummary";
const Results = ({ onRestart }: { onRestart: () => void }) => {
  const { answerResults } = useQuestions();
  const results = [...answerResults];
  const correctAnswers = results.filter((result) => result.isCorrect);
  const { numberOfQuestions } = useQuizConfig();

  return (
    <>
      <Card sx={{ p: 4 }}>
        <Box>
          <Typography variant="h4">Your Results</Typography>
          <Typography variant="body2">{`${
            (correctAnswers.length / numberOfQuestions) * 100
          }%`}</Typography>
          <LinearProgress
            variant="determinate"
            value={(correctAnswers.length / numberOfQuestions) * 100}
          />
          <Typography variant="body2">{`${correctAnswers.length}/${numberOfQuestions}`}</Typography>
        </Box>
        <Divider />
      </Card>
        <AnswersSummary answersResults={answerResults}/>
      <Card sx={{ m: 4 }}>
        <Button onClick={onRestart}>Retake Same Quiz</Button>
      </Card>
    </>
  );
};

export default Results;
