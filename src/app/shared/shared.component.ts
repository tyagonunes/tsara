import { Component, OnInit } from '@angular/core';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {



  constructor(
    private ngNavigatorShareService: NgNavigatorShareService, 
    public snackBar: MatSnackBar) {
   }

  ngOnInit() {

  }


  share() {
    this.ngNavigatorShareService.share({
      title: 'App Native PWA',
      text: 'Baixe nosso app em PWA',
      url: 'https://tsara-app.herokuapp.com/'
    }).then( (response) => {})
    .catch( (error) => {
      this.snackBar.open("Seu navegador não suporta essa funcionalidade", "ok", { duration: 5000, verticalPosition: 'bottom' })
    });
  }


}
