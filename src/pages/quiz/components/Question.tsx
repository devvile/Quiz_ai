import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import type { Question } from "../../../types/Question";
interface QuestionProps {
  question: Question;
  time?: number;
}
const QuestionItem = ({ question }: QuestionProps) => {
  return (
    <>
      <CardHeader></CardHeader>
      <CardContent>
        <Typography sx={{ mb: 2 }} variant="h4">
          {question.question}
        </Typography>
        <Divider></Divider>
        {question.answers.map((answer, ind) => (
          <p key={ind}>{answer}</p>
        ))}
      </CardContent>
      <CardActions sx={{ position: "flex", justifyContent: "space-between" }}>
        <div></div>
        <Button variant="outlined">NEXT</Button>
      </CardActions>
    </>
  );
};

export default QuestionItem;
