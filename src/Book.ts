//import { Database } from "./Database";

export default class Book {
  //private database: Database;
  database: any;

  // constructor(database: Database) {
  constructor(database: any) {
    this.database = database;
  }

  async getAllBooks() {
    //const connection = await this.database.getConnection();
    //const [rows] = await connection.query("SELECT * FROM book");
    const query = "SELECT * FROM book";
    const [rows] = await this.database.query(query, []);
    return rows;
  }
}
