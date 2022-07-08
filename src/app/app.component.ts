
import { Component, OnInit } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  direction: string;
  language: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    private translate: TranslateService,
  ) {
    this.initializeApp();
    if (localStorage.getItem("vLang") !== null) {
      this.setLanguage(localStorage.getItem("vLang"));
      this.language = localStorage.getItem("vLang");
    } else {
      localStorage.setItem('vLang', 'en');
      this.setLanguage('en');
      this.language = 'en';
    }

  }
  setLanguage(lang) {
    this.language = lang;
    this.translate.use(lang);
    this.translate.onLangChange.subscribe(event => {
      document.dir = this.direction = (event.lang === 'en' ? 'ltr' : 'rtl');
      document.documentElement.setAttribute('lang', event.lang);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
   
  }
}
