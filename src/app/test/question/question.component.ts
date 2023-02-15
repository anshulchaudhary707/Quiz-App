import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/model/answer';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit {

  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  isQuizCompleted: boolean = false;
  private review: Answer[] = [];
  isFetching: boolean = false;

  constructor(private qs: QuestionService, private route: Router) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.qs.getQuestion()
      .subscribe(res => {
        this.questionList = res;
        this.isFetching = false;
      })
  }

  nextQuestion() {
    this.currentQuestion++;
  }

  previousQuestion() {
    this.currentQuestion--;
  }

  answer(qno: number, option: any, current: any) {
    if (option.correct) {
      this.points += 10;
      this.correctAnswer += 1;
    }
    else {
      this.inCorrectAnswer += 1;
    }

    let ans = new Answer();
    ans._question = current.questionText;
    ans._userAnswer = option.text;
    ans._correctAnswer = current.answer;
    this.review.push(ans);

    this.currentQuestion++;

    if (qno === this.questionList.length) {
      this.isQuizCompleted = true;
      this.qs.review = [];
      this.qs.review = this.review;
      this.qs.totalQuestions = 0;
      this.qs.totalQuestions = this.questionList.length;
      this.qs.totalCorrect = 0;
      this.qs.totalCorrect = this.correctAnswer;
      this.qs.totalIncorrect = 0;
      this.qs.totalIncorrect = this.inCorrectAnswer;
      this.qs.totalPoints = 0;
      this.qs.totalPoints = this.points;
    }
  }

  resultPage() {
    this.route.navigateByUrl("/result");
  }
}
