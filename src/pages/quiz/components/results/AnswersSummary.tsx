import { Card } from "@mui/material";
import type { AnswerResult } from "../../../../types/AnswerResult";
import AnswerSummary from "./AnswerSummary";

interface AnswersSummaryProps{
    answersResults:AnswerResult[]
}

const AnswersSummary = ({answersResults}:AnswersSummaryProps ) =>{
    return <Card>
        {answersResults.map((result,ind)=><AnswerSummary answerResult={result} key={ind}/>)}
    </Card>
}

export default AnswersSummary;