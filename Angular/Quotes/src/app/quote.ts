import { stringify } from "querystring";

export class Quote {
  quote: String;
  author: String;
  Date: any;
  name: String;
  constructor
  (Date:Date,
    author:String,
    quote: String,
    name : String)
    {
    this.quote=quote;
    this.author= author;
    this.name= name;
    this.Date
  }
}
