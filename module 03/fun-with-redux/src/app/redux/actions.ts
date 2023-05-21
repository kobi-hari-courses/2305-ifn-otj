import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Question } from "../models/question.model";

export const userActions = createActionGroup({
    source: 'User', 
    events: {
        'reset': emptyProps(), 
        'answer current question': props<{index: number}>(), 
        'get new questions': emptyProps()
    }
});


export const serviceActions = createActionGroup({
    source: 'service', 
    events: {
        'questions fetched successfully': props<{questions: Question[]}>()
    }
})