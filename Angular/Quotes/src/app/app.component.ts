import { Quote } from '@angular/compiler/public_api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = "Bint's Quotes";
  loading: boolean = true
  quote!: Quote
  quoteList!: Quote[]
  tweetURL!: string
}
