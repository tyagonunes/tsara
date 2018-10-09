import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  
  public location;
  public locationReady;
  public loading:boolean;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
   
  }

  getPosition() {
    if(navigator.geolocation) {
      this.loading = true
      navigator.geolocation.getCurrentPosition((location) => {
        this.location = location;
        this.locationReady = true;
        this.loading = false
      })
    } else {
      this.snackBar.open("Seu navegador não suporta essa funcionalidade", "ok", { duration: 5000, verticalPosition: 'bottom' })
    }
  }

}
