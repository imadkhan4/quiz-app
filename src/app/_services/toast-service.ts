import { LoadingController, ToastButton, ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {

  constructor(
    public toastController: ToastController,
    public loadingController: LoadingController
  ) { }

  primary(message: string, position: 'top' | 'bottom' | 'middle' = 'bottom', duration = 3000, buttons?: (string | ToastButton)[]) {
    this.toast(message, 'green', position, duration, buttons);
  }

  danger(message: string, position: 'top' | 'bottom' | 'middle' = 'bottom', duration = 3000, buttons?: (string | ToastButton)[]) {
    this.toast(message, 'danger', position, duration, buttons);
  }
  success(message: string, position: 'top' | 'bottom' | 'middle' = 'bottom', duration = 3000, buttons?: (string | ToastButton)[]) {
    this.toast(message, 'primary', position, duration, buttons);
  }

  private toast(message: string, color: string, position: any, duration: number, buttons: (string | ToastButton)[] = null) {
    this.toastController.create({
      message,
      color,
      position,
      duration,
      buttons
    }).then(toast => toast.present());
  }

}
