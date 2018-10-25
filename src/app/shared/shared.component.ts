import { Component, OnInit } from '@angular/core';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {


  private ngNavigatorShareService: NgNavigatorShareService;

  constructor(ngNavigatorShareService: NgNavigatorShareService, public snackBar: MatSnackBar) {
    this.ngNavigatorShareService = ngNavigatorShareService;
   }

  ngOnInit() {

  }

  title = 'app';
  share() {
    this.ngNavigatorShareService.share({
      title: 'Compartilhar meu app',
      text: 'Compartilhe escolhendo uma opção',
      url: 'https://developers.google.com/web'
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      this.snackBar.open("Seu navegador não suporta essa funcionalidade", "ok", { duration: 5000, verticalPosition: 'bottom' })
    });
  }


}
