import { DatePipe } from '@angular/common';
import { identifierName } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { Quote } from '../quote'; 

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
 
  quotes:Quote[]=
  [  new Quote('IN THIS TEMPLE AS IN THE  HEARTS OF THE PEOPLE FOR WHOM HE SAVED THE UNION THE MEMORY OF ABRAHAM LINCOLN IS ENSHRINED FOREVER.','Royal Cortissoz','Directly behind the Lincoln statue you can read the words of Royal Cortissoz carved into the wall',new Date(2019, 6, 9)),
  new Quote('The ultimate measure of a man is not where he stands in moments of convenience and comfort, but where he stands at times of challenge and controversy.','Martin Luther king Jr','From his 1963 book, Strength to Love',new Date(2019, 6, 9)),
  new Quote('I am not a saint, unless you think of a saint as a sinner who keeps on trying.','Nelson Mandela','Nelson Rolihlahla Mandela was a South African anti-apartheid revolutionary, political leader, and philanthropist who served as President of South Africa from 1994 to 1999. He was the country\'\s first black head of state and the first elected in a fully representative democratic election.',new Date(2019, 6, 9)),
  ];

  newQuote = new Quote('','','',new Date(),);


  submitQuote(value: any){
  var quote = value.quote;
  var author = value.author;
  var Date = value.medium;
  var name = value.name;
  alert (quote+author+Date+name)
  this.addQuote(this.newQuote,author, name, Date, quote)
  }

 addQuote(newQuote: Quote,author: any, name: any, Date: any, quote: any){
   newQuote.quote= quote;
   newQuote.name= name;
   newQuote.author = author;
   this.quotes.push(newQuote) ;
   alert("yyyyyy")
 }
  

  constructor() { }

  ngOnInit(): void {
  }

}
