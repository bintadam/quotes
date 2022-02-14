import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // value!: string;
  // @Output() valueEmitter= new EventEmitter<any> ();
  
  // constructor() { }
  // sender(){
  //   this.valueEmitter.emit(this.value);
  // }

  ngOnInit(): void {
  }

}
