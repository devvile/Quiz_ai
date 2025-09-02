export interface AnswerResult {
  questionIndex: number;
  question: string;
  selectedAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
  answers: string[];
  explanation:string;
}