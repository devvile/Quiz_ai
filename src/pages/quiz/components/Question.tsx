import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import type { Question } from "../../../types/Question";
import { LinearProgress } from "@mui/material";

interface QuestionProps {
  question: Question;
  time?: number;
}
const QuestionItem = ({ question }: QuestionProps) => {
  return (
    <Card sx={{ p: 4 }}>
      <CardHeader></CardHeader>
      <CardContent>
        <Typography sx={{ mb: 2 }} variant="h4">
          {question.question}
        </Typography>
        <LinearProgress />
        <Divider></Divider>
        {question.answers.map((answer, ind) => (
          <p key={ind}>{answer}</p>
        ))}
      </CardContent>
      <CardActions sx={{ position: "flex", justifyContent: "space-between" }}>
        <div></div>
        <Button variant="outlined">NEXT</Button>
      </CardActions>
    </Card>
  );
};

export default QuestionItem;
