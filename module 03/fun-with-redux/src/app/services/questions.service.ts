import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  delay(millis: number): Promise<void> {
    return new Promise(res => setTimeout(res, millis));
  }

  async getNewQuestions(): Promise<Question[]> {
    await this.delay(3000);

    return [
      {
        caption: '2 + 2', 
        answers: ['2', '3', '4', '5'],
        correctAnswer: 2
      },
      {
        caption: '2 + 3', 
        answers: ['2', '3', '4', '5'],
        correctAnswer: 3
      },
      {
        caption: '2 + 5', 
        answers: ['2', '7', '4', '5'],
        correctAnswer: 1
      }
    ]
    
  }


}
