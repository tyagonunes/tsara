import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/network/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  noticias = []

  constructor(private _newsService:NewsService) { }

  ngOnInit() {
    this._newsService.getAll()
    .then((result:any) => { this.noticias = result })
    .catch((err) => { console.log(err) })
  }

}
