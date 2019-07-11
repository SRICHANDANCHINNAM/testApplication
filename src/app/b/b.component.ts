import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  //To get data from parent to child
  @Input() showModal;
  name : any;
  //To send the data from child to parent using output and eventemitter
  @Output() emitName : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  //Submit Button
  submitName() {
    this.emitName.emit(this.name);
    console.log(this.name,"::::::::")
  }

}
