import { Card, Button, Typography, Divider, Box, LinearProgress } from "@mui/material";
import { useQuestions } from "../../../../contexts/QuizContext";
import { useQuizConfig } from "../../../../contexts/QuizConfigContext";
const Results = ({ onRestart }: { onRestart: () => void }) => {
    const {answerResults}= useQuestions();
    const results = [...answerResults];
    const correctAnswers = results.filter(result=>result.isCorrect);
    const incorrectAnswers = results.filter(result=>!result.isCorrect);
    const {numberOfQuestions} = useQuizConfig();
    console.log(correctAnswers)
  return (
    <Card sx={{p:4}}>
        <Box>
        <Typography variant="h4">Your Results</Typography>
                <Typography variant="body2">{`${correctAnswers.length/numberOfQuestions*100}%`}</Typography>
        <LinearProgress variant="determinate" value={correctAnswers.length/numberOfQuestions*100}/>
        <Typography variant="body2">{`${correctAnswers.length}/${numberOfQuestions}`}</Typography>
        </Box>

      <Divider/>
      <Button onClick={onRestart}>Retake Same Quiz</Button>
    </Card>
  );
};

export default Results;
