import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewResultComponent } from './result/view-result/view-result.component';
import { ViewReviewComponent } from './review/view-review/view-review.component';
import { QuestionComponent } from './test/question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: "", component: WelcomeComponent
  },
  {
    path: "question", component: QuestionComponent
  },
  {
    path: "result", component: ViewResultComponent
  },
  {
    path: "review", component: ViewReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
