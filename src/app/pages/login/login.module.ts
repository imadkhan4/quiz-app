import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { LanguagePage } from '../language/language.page';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
  SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage
      }
    ])
  ],
  declarations: [LoginPage, LanguagePage],
  exports:[LoginPage]
})
export class LoginPageModule {}
