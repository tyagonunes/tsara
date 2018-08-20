import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-offline-storage',
  templateUrl: './offline-storage.component.html',
  styleUrls: ['./offline-storage.component.css']
})
export class OfflineStorageComponent implements OnInit {

  public notes:any[] = []

  public note = {
    text: null,
    date: null,
  }

  constructor() { 
    if(localStorage.getItem("notes") !== null) {
      this.notes = JSON.parse(localStorage.getItem("notes"))
    }
  }

  ngOnInit() {
  }


  clearStorage() {
    this.notes = []
    localStorage.removeItem("notes")
  }

  save(value) {
    this.note.text = value.note
    this.note.date = Date.now()

    this.notes.push(this.note)
    // localStorage.removeItem("notes")
    localStorage.setItem("notes", JSON.stringify(this.notes))

    this.notes = JSON.parse(localStorage.getItem("notes"))
  }
}
