
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-language',
    templateUrl: 'language.page.html',
    styleUrls: ['language.page.scss']

})
export class LanguagePage {
    direction: string;
    language: string;
    languages = [
        {
            name: 'English',
            code: 'en'
        },
        {
            name: 'العربية',
            code: 'ar'

        }
    ];

    constructor(
        public navCtrl: NavController,
        private translate: TranslateService,
    ) {
        this.language = this.translate.currentLang;
    }

    onClickLang(event) {
        localStorage.setItem('vLang', event);
        this.translate.use(event);
        this.translate.onLangChange.subscribe(event => {
            document.dir = this.direction = (event.lang === 'en' ? 'ltr' : 'rtl');
            document.documentElement.setAttribute('lang', event.lang);
        });
    }

}
