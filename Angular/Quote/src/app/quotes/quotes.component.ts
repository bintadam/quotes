import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  upvotes = 0;
  downvotes = 0;
  isComplete= true;

  quotes: Quotes[]=[

    new Quotes(0,'Rumi','Education','“ What you seek is seeking .”',0,0,'Bintadam'),
    new Quotes(1,'Rumi','Education','“You are not a drop in the ocean.You are the entire ocean in a drop.”',0,0,'Willard'),
    new Quotes(2,'Rumi','Education', '"Yesterday i was clever cause i wanted to change the world. Today i am wise, so i am changing myself.”',0,0,'Willard'),
    new Quotes(3,'Rumi','Education','“Life is a balance between holding on and letting go.”',0,0,'Willard'),

  ]

  getCurrentId(){
    return this.quotes.length +1
  }
  newQuote(quote:any) {
    quote.id = this.getCurrentId();
    quote.author= quote.author;
    quote.title=quote.title;
    quote.quote=quote.quote;
    quote.submitedBy=quote.submitedBy;
    this.quotes.unshift(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
