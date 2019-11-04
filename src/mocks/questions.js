const questions = [
  {
    type: `genre`,
    genre: `jazz`,
    answers: [
      {
        src: `http://mp3.classic-music.ru/music/vivaldi/01.mp3`,
        genre: `classic`,
      },
      {
        src: `http://dl2.mp3party.net/online/8464242.mp3`,
        genre: `pop`,
      },
      {
        src: `http://dl2.mp3party.net/online/2072.mp3`,
        genre: `jazz`,
      },
      {
        src: `http://dl2.mp3party.net/online/7625333.mp3`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `http://mp3.classic-music.ru/music/vivaldi/01.mp3`,
        genre: `classic`,
      },
      {
        src: `http://dl2.mp3party.net/online/914916.mp3`,
        genre: `rock`,
      },
      {
        src: `http://dl2.mp3party.net/online/2072.mp3`,
        genre: `jazz`,
      },
      {
        src: `http://dl2.mp3party.net/online/8468238.mp3`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Placebo`,
      src: `http://dl2.mp3party.net/online/8468238.mp3`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Placebo`,
      },
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Scorpions`,
      src: `http://dl2.mp3party.net/online/7625333.mp3`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `Scorpions`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam`,
      },
    ],
  },
];

export default questions;
