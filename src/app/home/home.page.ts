import { ApiService } from './../_services/api.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlushService } from '../_services/flush.service';
import { ToastService } from '../_services/toast-service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: any;
  language: string;
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
    this.language = localStorage.getItem("vLang");
    this.route.queryParams
      .subscribe(params => {
        this.params = params;
      });
  }
  ngOnInit() {
    this.getQuestions()
  }


  getQuestions() {
    console.log(this.params)
    this.questions = [];
    this._apiService.get(this.params).subscribe(
      (data) => {
        this.questions = data;
        this.questions.results.forEach((element, index) => {
          element.qestName = 'quest_' + index;
          element.selectedAnswer = '';
          element.disabled = false;
        });
        console.log(this.questions)
      },
      error => {
        console.log(error)
      });
  }

  checkValue(ev, index) {
    // console.log(ev)
    ++this.attemptQuestions;
    this.questions.results[index].selectedAnswer = ev.detail.value;
    this.questions.results[index].disabled = true;
    console.log(this.attemptQuestions)
  }
  onClickReset() {

  }
  onClickResult() {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    console.log(this.attemptQuestions)
    console.log(this.questions.results.length)
    if (this.attemptQuestions === this.questions.results.length) {
      this.questions.results.forEach(element => {
        if (element.selectedAnswer === element.correct_answer) {
          correctAnswers++;
        } else {
          incorrectAnswers++;
        }
      });
      let result = {
        name: 'imad khan',
        correctAnswers,
        incorrectAnswers
  
      }
      this.flushService.Data = result;
      this.router.navigate(['dashboard']);
    } else {
      this._toastService.danger(this.translate.instant('please_attempt_all_the_questions'), 'bottom', 4000);
    }
      
    
  }
  onClickCancel() {

  }




}
