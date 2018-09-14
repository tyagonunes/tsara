import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.component.html',
  styleUrls: ['./push-notification.component.css']
})
export class PushNotificationComponent implements OnInit {

  public status = "indisponivel"


  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
    // if ('Notification' in window) {
    //   this.status = Notification;
    // }

  }


  requestPermission() {
    if (!('Notification' in window)) {
      this.snackBar.open("Seu navegador não suporta essa funcionalidade", "ok", { duration: 5000, verticalPosition: 'bottom' })
      return;
    }

    Notification.requestPermission((result) => {
      let msg = "Status de permissão: " + result;
      this.snackBar.open(msg, "ok", { duration: 5000, verticalPosition: 'bottom' })
    });
  }

  nonPersistentNotification() {
    if (!('Notification' in window)) {
      this.snackBar.open("Seu navegador não suporta essa funcionalidade", "ok", { duration: 5000, verticalPosition: 'bottom' })
      return;
    }

    try {
      var notification = new Notification("Notificação não persistente!");
    } catch (err) {
      this.snackBar.open("Seu navegador não suporta essa funcionalidade", "ok", { duration: 5000, verticalPosition: 'bottom' })
    }
  }

  persistentNotification() {
    if (!('Notification' in window) || !('ServiceWorkerRegistration' in window)) {
      this.snackBar.open("Seu navegador não suporta essa funcionalidade", "ok", { duration: 5000, verticalPosition: 'bottom' })
      return;
    }

    try {
      navigator.serviceWorker.getRegistration()

      navigator.serviceWorker.getRegistration()
        .then(reg => {
          reg.showNotification("Notificação persistente!")
        })
        .catch(err => this.snackBar.open("Erro ao lançar a notificação", "ok", { duration: 5000, verticalPosition: 'bottom' }));
    } catch (err) {
      this.snackBar.open("Erro ao lançar a notificação", "ok", { duration: 5000, verticalPosition: 'bottom' })
    }
  }
}
