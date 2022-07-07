import { ToastService } from 'src/app/_services/toast-service';
import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class UIService {

  constructor(
    public alertController: AlertController,
    private _toasterService: ToastService,
    private translate: TranslateService,
  ) { }

  async confirmationDialogue(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.translate.instant('confirmation'),
      message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            // this._toasterService.success('Request has been deleted.')
          }
        }
      ]
    });

    await alert.present();
  }




}
