(function(){

  var t = {
    playlist: [
      {
        file: "resources/tracks/01.mp3",
        thumb: "resources/thumbs/01.jpg",
        trackName: "Pizza",
        trackArtist: "Martin Garrix",
        trackAlbum: "Single",
      },
      {
        file: "resources/tracks/02.mp3",
        thumb: "resources/thumbs/02.gif",
        trackName: "Electromania - Shine On",
        trackArtist: "Electro",
        trackAlbum: "Single",
      },
      {
        file: "resources/tracks/03.mp3",
        thumb: "resources/thumbs/02.gif",
        trackName: "Happy life",
        trackArtist: "Electro",
        trackAlbum: "Single",
      },
      {
        file: "resources/tracks/04.mp3",
        thumb: "resources/thumbs/04.gif",
        trackName: "Itro",
        trackArtist: "Panda",
        trackAlbum: "[NCS Release]",
      },
      {
        file: "resources/tracks/05.mp3",
        thumb: "resources/thumbs/05.jpg",
        trackName: "Fire",
        trackArtist: "Elektronomia",
        trackAlbum: "Single",
      },
    ]
  }

  $(".jAudio").jAudio(t);

})();