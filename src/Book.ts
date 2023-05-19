import { connect } from "./database";
//import { minhaDatabase } from 'modulo-externo'

export default class Book {
  database: any;
  constructor() {
    // this.database = minhaDatabase.inicia();
    this.database = connect();
  }

  getBook() {
    const listBook = this.database.query("select * from book");
    console.log(listBook);
  }

  // save() {
  //   this.database.save(this);
  // }
}
