import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/model/answer';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.scss']
})
export class ViewReviewComponent implements OnInit {

  constructor(private qs: QuestionService, private route: Router) { }

  public review: Answer[] = [];

  ngOnInit(): void {
    this.review = this.qs.review;
  }

  goToHome() {
    this.route.navigateByUrl("/");
  }
}
