import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QuestionsContextProvider } from "./contexts/QuizContext.tsx";
import { QuizConfigContextProvider } from "./contexts/QuizConfigContext.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QuestionsContextProvider>
      <QuizConfigContextProvider>
        <App />
      </QuizConfigContextProvider>
    </QuestionsContextProvider>
  </StrictMode>
);
