import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-add-quotes',
  templateUrl: './add-quotes.component.html',
  styleUrls: ['./add-quotes.component.css']
})
export class AddQuotesComponent implements OnInit {
 
  newQuote = new Quotes(0,'','','',0,0,'');

  @Output() addQuote= new EventEmitter<Quotes>();


  submitQuote(){
    console.log(this.newQuote)
    this.addQuote.emit(this.newQuote);
    
  }


  constructor() { }

  ngOnInit(): void {
  }

}
