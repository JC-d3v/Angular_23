


export class Person {
  public name: string;
  private address: string;

  constructor() {
    this.name = 'guy';
    this.address = 'NYC'
  }
}

const ironman = new Person();

console.log(ironman);