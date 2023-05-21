import { createReducer, on } from "@ngrx/store";
import { QuizInitialState } from "./quiz.state";
import { serviceActions, userActions } from "../actions";
import { getCurrentQuestion } from "./quiz.helpers";

export const quizReducer = createReducer(QuizInitialState,
    on(userActions.reset, () => QuizInitialState),

    on(userActions.answerCurrentQuestion, (state, action) => ({
        ...state,
        answers: [...state.answers, {
            userAnswer: action.index,
            isCorrect: getCurrentQuestion(state).correctAnswer === action.index
        }]
    })), 

    on(userActions.getNewQuestions, (state) => ({
        ...state, 
        message: 'Fetching new questions'
    })), 

    on(serviceActions.questionsFetchedSuccessfully, (state, action) => ({
        ...state, 
        answers: [], 
        questions: action.questions, 
        message: `Fetched ${action.questions.length} new questions`
    }))
);