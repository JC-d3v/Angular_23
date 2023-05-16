interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
};

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: 'Ed Sheeran',
    year: 2015
  }
}

const song = 'New Song';

const { song: anotherSong, songDuration: duration, details: detalles } = audioPlayer;

const { author } = detalles;

// console.log('song: ', anotherSong);
// console.log('duration: ', duration);
// console.log('author: ', author);

// TIP: desEstructuracion de arreglos
const [, , trunks = 'No encontrado']: string[] = ['Goku', 'Vegeta'];

console.log('Personaje 3:', trunks);

export { }