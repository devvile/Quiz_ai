import { Typography, Button, Box } from "@mui/material";

interface AnswerProps {
  answer: string;
  answerIndex: number;
  showAnswers: boolean;
  isCorrect: boolean;
  correctAnswer: number;
  selectedAnswer: number | null;
  onSelect: (_answerIndex: number) => void;
}

const Answer = ({
  answer,
  answerIndex,
  onSelect,
  showAnswers,
  correctAnswer,
  selectedAnswer,
}: AnswerProps) => {
  const calculateAnswerBackround = () => {
    if (showAnswers && answerIndex == correctAnswer) {
      return "success.main";
    } else if (
      showAnswers &&
      selectedAnswer !== correctAnswer &&
      selectedAnswer == answerIndex
    ) {
      return "error.main";
    }
  };
  return (
    <Box sx={{ m: 1 }}>
      <Button
        onClick={() => onSelect(answerIndex)}
        variant="contained"
        disabled={showAnswers}
        sx={{
          width: "100%",
          boxShadow: "none",
          textTransform: "none",
          "&:focus": {
            outline: "none",
            border: "none",
          },
          "&:focus-visible": {
            outline: "none",
            border: "none",
          },
          "&:hover": {
            boxShadow: "none",
          },
          "&.Mui-disabled": {
            opacity: 1, // Remove opacity reduction
            color: "white", // Keep text color
            backgroundColor: calculateAnswerBackround(),
          },
        }}
      >
        <Typography>{answer}</Typography>
      </Button>
    </Box>
  );
};

export default Answer;
