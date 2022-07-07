
import { Component, OnInit } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ApiService } from './_services/api.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  direction: string;
  language: string;
  vData: any;
  user: any;
  currentYear: number = new Date().getFullYear();
  public appPages = [
    {
      title: 'home',
      url: 'home',
      icon: 'home-outline'
    },
    {
      title: 'setting',
      url: '/setting',
      icon: 'cog-outline'
    },
    {
      title: 'profile',
      url: '/profile',
      icon: 'person-circle-outline',
    },
    {
      title: 'sign_out',
      url: '/login',
      icon: 'log-out-outline'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _apiService: ApiService,
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
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
