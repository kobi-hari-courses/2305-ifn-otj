import { AllQuestions } from "src/app/models/all-questions";
import { Answer } from "src/app/models/answer.model";
import { Question } from "src/app/models/question.model";

export interface QuizState {
    readonly questions: Question[];
    readonly answers: Answer[];
}

export const QuizInitialState: QuizState = {
    questions: AllQuestions, 
    answers: []
}