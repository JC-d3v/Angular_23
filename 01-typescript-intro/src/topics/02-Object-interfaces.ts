
// TIP: tipado de arreglos
const skills: string[] = ['Bash', 'Counter', 'Healing'];


// TIP: Creacion de interface para tipado
interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

// TIP:  tipado de objetos
const strider: Character = {
  name: 'Strider',
  hp: 100,
  skills: ['Bash', 'Counter']
}

strider.hometown = 'Rivendell'

console.table(strider)

export { }