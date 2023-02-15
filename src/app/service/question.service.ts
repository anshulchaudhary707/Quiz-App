import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from '../model/answer';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  review: Answer[] = [];
  totalQuestions: number = 0;
  totalCorrect: number = 0;
  totalIncorrect: number = 0;
  totalPoints: number = 0;

  getQuestion() {
    return this.http.get("https://online-test-application-f1bb5-default-rtdb.firebaseio.com/questions.json");
  }
}
