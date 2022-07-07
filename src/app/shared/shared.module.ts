import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    exports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule

    ]
})
export class SharedModule { }
