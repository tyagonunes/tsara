import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  
  public location;
  public locationReady;

  constructor() { }

  ngOnInit() {
   
  }

  getPosition() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        this.location = location;
        this.locationReady = true;
      })
    } else {
      alert("Esse navegador nao suporta geolocalização")
    }
  }

}
