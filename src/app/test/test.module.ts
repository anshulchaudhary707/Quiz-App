import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    QuestionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class TestModule { }
