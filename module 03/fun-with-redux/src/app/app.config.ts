import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { quizFeature } from './redux/quiz/quiz.feature';
import { provideEffects } from '@ngrx/effects';
import { QuestionsEffects } from './redux/quiz/quiz.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideStore(),
    provideEffects(QuestionsEffects),
    provideState(quizFeature),
    provideStoreDevtools()
  ]
};
