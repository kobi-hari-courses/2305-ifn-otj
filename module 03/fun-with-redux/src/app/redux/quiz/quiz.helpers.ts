import { Question } from "src/app/models/question.model";
import { QuizState } from "./quiz.state";

export function getCurrentQuestion(state: QuizState): Question {
    const index = state.answers.length;
    return state.questions[index];
}