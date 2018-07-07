import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/network/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles = []

  constructor(private _articleService: ArticlesService) { }


  ngOnInit() {

    this._articleService.getAll()
    .then((result:any) => {
      console.log(result)
       this.articles = result
      })
    .catch((error) => console.log(error))
  }

}
