


export class Person {
  // public name: string;
  // private address: string;

  constructor(
    public name: string,
    private address: string = 'No address'
  ) { }
}

const ironman = new Person('tony');

console.log(ironman);