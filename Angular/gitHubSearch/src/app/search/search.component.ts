import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  value: string;
  @Output() valueEmitter = new EventEmitter<any>();
  
  constructor() {}
  newUser() {
    this.valueEmitter.emit(this.value);
  }

  ngOnInit(): void {}
}

