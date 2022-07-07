
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss']

})
export class LoginPage {
    direction: string;
    welcomeForm: FormGroup;
    submitted = false;
    user = {
        name: '',
    };
    categories = [
        {
            id: 1,
            name: 'general_knowledge',
            value: '9'
        },
        {
            id: 2,
            name: 'computer_science',
            value: '18'
        },
        {
            id: 3,
            name: 'art',
            value: '25'
        },
        {
            id: 4,
            name: 'politics',
            value: '24'
        },
        {
            id: 5,
            name: 'sports',
            value: '23'
        }

    ];
    difficulties = [
        {
            id: 1,
            name: 'easy',
            value: 'easy'
        },
        {
            id: 2,
            name: 'medium',
            value: 'medium'
        },
        {
            id: 3,
            name: 'hard',
            value: 'hard'
        }
    ]
    types = [
        {
            name: 'multiple_choice',
            value: 'multiple'
        },
        {
            name: 'true_false',
            value: 'boolean'
        },
    ]
    language: string;

    constructor(
        public navCtrl: NavController,
        private router: Router,
        private translate: TranslateService,
    ) {
        this.language = this.translate.currentLang;
    }

    ngOnInit() {
        // , Validators.minLength(3), Validators.maxLength(10)
        this.welcomeForm = new FormGroup(
            {
                name: new FormControl('', [Validators.required]),
                numbOfQuestions: new FormControl('', [Validators.required]),
                category: new FormControl('', [Validators.required]),
                difficulty: new FormControl('', [Validators.required]),
                type: new FormControl('', [Validators.required]),
            }
        );
    }
    onClickLang(event) {
        if (event == localStorage.getItem("vLang")) {
            // this._toastService.danger(this.translate.instant('the_selected_language_already_applied'));
        } else {
            localStorage.setItem('vLang', event);
            this.translate.use(event);
            this.translate.onLangChange.subscribe(event => {
                document.dir = this.direction = (event.lang === 'en' ? 'ltr' : 'rtl');
                document.documentElement.setAttribute('lang', event.lang);
            });
        }

    }


    get f() { return this.welcomeForm.controls; }
    async onRegister() {
        this.submitted = true;
        if (this.welcomeForm.invalid) {
            return;
        }
        this.user.name = this.welcomeForm.value.name;
        console.log(this.user)
        localStorage.setItem('quiz_user', JSON.stringify(this.user));
        console.log(this.welcomeForm.value.name)
        this.router.navigate(
            ['/home'],
            {
                queryParams: {
                    amount: this.welcomeForm.value.numbOfQuestions,
                    category: this.welcomeForm.value.category,
                    difficulty: this.welcomeForm.value.difficulty,
                    type: this.welcomeForm.value.type
                }
            }
        );

    }
}
