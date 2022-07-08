

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlushService } from '../_services/flush.service';
import { ToastService } from '../_services/toast-service';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from './../_services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: any;
  isListItemOpened: boolean = false;
  index: number = 0;
  autoManufacturers;
  correct = [];
  incorrect = [];
  questions: any = [];
  params: any;
  attemptQuestions = 0;
  selectedValue: string;
  constructor(
    private _apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private flushService: FlushService,
    private _toastService: ToastService,
    private translate: TranslateService

  ) {
    this.user = JSON.parse(localStorage.getItem("quiz_user"));
    this.route.queryParams
      .subscribe(params => {
        this.params = params;
      });
  }
  ngOnInit() {
    this.getQuestions()
  }

  getQuestions() {
    this.questions = [];
    this._apiService.get(this.params).subscribe(
      (data) => {
        this.questions = data;
        this.questions.results.forEach((element, index) => {
          element.qestName = 'quest_' + index;
          element.selectedAnswer = '';
          element.disabled = false;
        });
      },
      error => {
        console.log(error)
      });
  }
  checkValue(ev, index) {
    ++this.attemptQuestions;
    this.questions.results[index].selectedAnswer = ev.detail.value;
    this.questions.results[index].disabled = true;
  }
  onClickReset() {
    location.reload();
  }
  onClickResult() {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    if (this.attemptQuestions === this.questions.results.length) {
      this.questions.results.forEach(element => {
        if (element.selectedAnswer === element.correct_answer) {
          correctAnswers++;
        } else {
          incorrectAnswers++;
        }
      });
      let result = {
        name: this.user.name,
        correctAnswers,
        incorrectAnswers,
        category: this.params.category,
        difficulty:this.params.difficulty,
        totalMarks: this.params.amount,
        result: ((correctAnswers/this.params.amount)*100) >= 50  ? 'pass' : 'fail',
        type: this.params.type
      }
      this.flushService.Data = result;
      this.router.navigate(['dashboard']);
    } else {
      this._toastService.danger(this.translate.instant('please_attempt_all_the_questions'), 'bottom', 4000);
    }


  }

}
