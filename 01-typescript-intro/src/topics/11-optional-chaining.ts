
export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'Jorge',
}

const passenger2: Passenger = {
  name: 'Melissa',
  children: ['Natalia', 'Elizabeth'],
}

const returnChildrenNumber = (passenger: Passenger): number => {
  // TIP: operador optional chaining.
  const howManyChildren = passenger.children?.length || 0;
  // TIP: operator Not NULL Asertion Operator
  // const howManyChildren = passenger.children!.length;

  console.log(passenger.name, howManyChildren);

  return howManyChildren;
}

returnChildrenNumber(passenger1);