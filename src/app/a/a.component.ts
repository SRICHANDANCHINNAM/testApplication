import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  showModal = false;
  showName = false;
  changedName : string;
  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.showModal = true;
  }

  // Getting name from Child
  changedNameInDom(name) {
    this.changedName = name;
    this.showName = true;
  }
}
