import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-viewer',
  templateUrl: './card-viewer.component.html',
  styleUrls: ['./card-viewer.component.css']
})
export class CardViewerComponent implements OnInit {

  @Input() objViewer:any
  @Output() result = new EventEmitter();

  article:any

  constructor() { }

  ngOnInit() {
    this.article = this.objViewer.content
  }

  back() { this.result.emit(false) }
}
