import { Injectable } from '@angular/core';
import { Url } from "./config/config";
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ArticlesService {

  constructor(private _http: Http) { }

  getAll(){

    return new Promise((resolve, reject) => {
        this._http
        .get(Url.URL + "artigos/")
        .pipe(map(res => res.json()))
        .subscribe((result) => {
            resolve(result)
        }, (err) => {
            reject(err);
        })
    })
}
}
