import { DatePipe } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { Quote } from '../quote'; 

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  newQuote = new Quote(0,'','','',new Date(),);


  submitQuote(value: any){
  var quote = value.quote;
  var author = value.author;
  var Date = value.medium;
  var name = value.name;
  alert (quote+author+Date+name)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
