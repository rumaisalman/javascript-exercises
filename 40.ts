const albums = [];

function make_album(artist: string, title: string, no_of_tracks: number) {
  const dictionaries = {
    artist: artist.charAt(0).toUpperCase() + artist.slice(1),
    title: title.charAt(0).toUpperCase() + title.slice(1),
  };
  return dictionaries;
}

let album = make_album("Taylor Swift", "Lover", 18);
console.log(album);
album = make_album("Ariana Grande", "Eternal sunshine", 9);
console.log(album);
album = make_album("Ed sheeran", "Divide", 16);
console.log(album);
