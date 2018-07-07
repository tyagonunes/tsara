import { Component } from '@angular/core';
import { NewsService } from '../services/network/news.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  noticias = []

  // cards = [ { title: 'Card 1', cols: 2, rows: 1 },
  // { title: 'Card 2', cols: 1, rows: 1 },
  // { title: 'Card 3', cols: 1, rows: 2 },
  // { title: 'Card 4', cols: 1, rows: 1 }
// ]

  constructor(private _newsService:NewsService) {
    
  }

  ngOnInit() {
    this._newsService.getAll()
    .then((result:any) => {
      console.log(result)
      this.noticias = result
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
