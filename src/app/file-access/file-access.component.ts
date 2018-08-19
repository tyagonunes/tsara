import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-file-access',
  templateUrl: './file-access.component.html',
  styleUrls: ['./file-access.component.css']
})
export class FileAccessComponent implements OnInit {

  public files:any

  constructor() {}

  ngOnInit() {}


  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      this.files = event.target.files;
    }
  }


}
