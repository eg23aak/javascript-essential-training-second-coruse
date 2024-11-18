class legoSet {
  constructor(age, name, pieces, price, minifigs, retired) {
    this.age = age;
    this.name = name;
    this.pieces = pieces;
    this.price = price;
    this.minifigs = minifigs;
    this.retired = retired;
  }
  isRetired(available) {
    this.retired = available;
  }
}

class legoTechnic extends legoSet {
  constructor(age, name, pieces, price, minifigs, retired, difficulty) {
    super(age, name, pieces, price, minifigs, retired);
    this.difficulty = difficulty; //how difficult the set is to put together
  }
}
