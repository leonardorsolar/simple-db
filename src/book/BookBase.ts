export default class Book {
  constructor() {
    this.database = dataBaseMysql.init();
  }

  save() {
    this.database.save(this);
  }
}
