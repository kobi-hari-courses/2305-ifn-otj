import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, tap } from "rxjs";
import { QuestionsService } from "src/app/services/questions.service";
import { serviceActions, userActions } from "../actions";


@Injectable()
export class QuestionsEffects {

    constructor(
        private actions$: Actions, 
        private service: QuestionsService){}

    loadQuestionsEffect$ = createEffect(() => {
        // const questionsService = inject(QuestionsService);
    
        return this.actions$.pipe(
            ofType(userActions.getNewQuestions),
            tap(act => console.log('Effect input: ', act)), 
            exhaustMap(_ => this.service.getNewQuestions()), 
            map(results => serviceActions.questionsFetchedSuccessfully({questions: results})), 
            tap(act => console.log('Effect Output: ', act))
        );    
    });
}

