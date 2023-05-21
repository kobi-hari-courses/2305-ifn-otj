import { createFeature, createFeatureSelector, createReducer, createSelector } from "@ngrx/store";
import { QuizInitialState, QuizState } from "./quiz.state";

export const quizFeature = createFeature({
    name: 'quiz', 
    reducer: createReducer(QuizInitialState), 
    extraSelectors: ({selectAnswers, selectQuestions}) => {
        const selectCurrentQuestionIndex = createSelector(selectAnswers, answers => answers.length);
        const selectCurrentQuestion = createSelector(selectQuestions, selectCurrentQuestionIndex, (all, index) => all[index]);
        
        return {
            selectCurrentQuestionIndex, 
            selectCurrentQuestion
        }
    }
});


