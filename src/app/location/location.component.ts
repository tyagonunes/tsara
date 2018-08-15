import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/network/news.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  
  public location;
  public locationReady;

  constructor(private _newsService:NewsService) { }

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
