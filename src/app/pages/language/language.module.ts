import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { LanguagePage } from './language.page';



@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LanguagePage
      }
    ])
  ],
  declarations: [LanguagePage],
  exports:[LanguagePage]
})
export class LanguagePageModule {}