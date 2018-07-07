import { Injectable } from "@angular/core";
import { Headers } from '@angular/http';
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root', 
})
export class ConfigService {

  private _headers: Headers;

  constructor() { }

//   createHeaders() {
//     this._headers = new Headers();
//     this._headers.append('Content-Type', 'application/json')

//     return this._headers
//   }

//   createHeadersFile() {
//     this._headers = new Headers();
//     this._headers.append('Content-type', 'multipart/form-data')
//     // this._headers.append('Content-type', 'application/x-www-form-urlencoded')
//     return this._headers
//   }
}

export class Url {
  public static readonly URL = "http://localhost:8000/" // Amazon DEV
//   public static readonly URL = environment.apiUrl
}


export class ResponseService {

  responseSuccess(result) {
  }

  responseErr(err) {
  }

} 