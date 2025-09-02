import type { AnswerResult } from "../../../../types/AnswerResult";
import { Card, CardContent, Divider, Typography, Box } from "@mui/material";
import Answer from "../quiz/Answer";

const AnswerSummary = ({ answerResult }: { answerResult: AnswerResult }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {answerResult.question}
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            minHeight: 200,
          }}
        >
          {answerResult.answers.map((answer, ind) => (
            <Answer
              key={ind}
              answer={answer}
              answerIndex={ind}
              showAnswers={true} // Always show answers in summary
              isCorrect={answerResult.isCorrect}
              correctAnswer={answerResult.correctAnswer}
              selectedAnswer={answerResult.selectedAnswer}
              // onSelect is not provided, so buttons will be disabled
            />
          ))}
        </Box>

        {/* Optional: Show explanation if available */}
        {answerResult.explanation && (
          <Box sx={{ mt: 2, p: 2, backgroundColor: "grey.100", borderRadius: 1 }}>
            <Typography variant="body2" color="text.secondary">
              <strong>Explanation:</strong> {answerResult.explanation}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default AnswerSummary;