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
  [  new Quote('In the sweetness of friendship let there be laughter, and sharing of pleasures. For in the dew of little things the heart finds its morning is refreshed.','Zakiya Adam','Khalil Gibran',new Date(2022, 1,7)),
  new Quote(' I have learned silence from the talkative, toleration from the intolerant, and kindness from the unkind; yet, strange, i am ungrateful to those teachers.','Zakiya Adam','Khalil Gibran ',new Date(2021,4, 5  )),
  new Quote('Has love been blood written?','Zakiya Adam','Hadrawi.',new Date(2019, 6, 9)),
  new Quote('Your task is not to seek love, but merely to seek and find all the barriers within yourself that you have built against it','Zakiya Adam','Rumi.',new Date(2019, 6, 9)),

  ];

  newQuote = new Quote('','','',new Date(),);
  isComplete: any;


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
  

 quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}

deleteQuote(isComplete, index){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)


  numberoflikes : number=0
  dislikebuttonclick(){
  this.numberoflikes++;
  }


  numberoflikes : number=0
  likebuttonclick(){
  this.numberoflikes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
