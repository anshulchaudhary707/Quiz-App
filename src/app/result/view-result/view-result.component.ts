import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.scss']
})
export class ViewResultComponent implements OnInit {

  totalQuestions: number = 0;
  totalCorrect: number = 0;
  totalIncorrect: number = 0;
  totalPoints: number = 0;

  constructor(private qs: QuestionService, private route: Router) { }

  ngOnInit() {
    this.totalQuestions = this.qs.totalQuestions;
    this.totalCorrect = this.qs.totalCorrect;
    this.totalIncorrect = this.qs.totalIncorrect;
    this.totalPoints = this.qs.totalPoints;
  }

  reviewPage() {
    this.route.navigateByUrl("/review");
  }
}
