export interface Anime {
  id: string;
  title: string;
  japaneseTitle: string;
  year: number;
  rating: string;
  director: string;
  studio: string;
  genres: string[];
  tagline: string;
  synopsis: string;
  image: string;
  heroImage: string;
  color: string;
}

export const animes: Anime[] = [
  {
    id: "suzume",
    title: "SUZUME NO TOJIMARI",
    japaneseTitle: "すずめの戸締まり",
    year: 2022,
    rating: "8.4",
    director: "Makoto Shinkai",
    studio: "CoMix Wave Films",
    genres: ["Adventure", "Fantasy", "Romance"],
    tagline: "It's written in the stars.",
    synopsis:
      "The film centers on the story of Suzume, a 17y girl living in a quiet town in the Kyushu region of southwestern Japan. One day, Suzume meets a young man looking for \"a door\". The film is a journey across Japan in which Suzume must close and lock the \"gates of disaster\" one by one to stop the disasters, but also an adventure in the modern world towards the maturity and emancipation of a young girl.",
    image: "/images/anime-suzume.jpg",
    heroImage: "/images/anime-suzume.jpg",
    color: "#d4b864",
  },
  {
    id: "your-name",
    title: "YOUR NAME",
    japaneseTitle: "君の名は。",
    year: 2016,
    rating: "8.8",
    director: "Makoto Shinkai",
    studio: "CoMix Wave Films",
    genres: ["Romance", "Drama", "Supernatural"],
    tagline: "I've been looking for you.",
    synopsis:
      "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart? A high school boy and girl who have never met begin to swap bodies, leaving them to navigate each other's lives and uncover the mysterious thread binding them together across time and space.",
    image: "/images/anime-yourname.jpg",
    heroImage: "/images/anime-yourname.jpg",
    color: "#e07a5f",
  },
  {
    id: "spirited-away",
    title: "SPIRITED AWAY",
    japaneseTitle: "千と千尋の神隠し",
    year: 2001,
    rating: "9.3",
    director: "Hayao Miyazaki",
    studio: "Studio Ghibli",
    genres: ["Fantasy", "Adventure", "Family"],
    tagline: "The tunnel led Chihiro to a mysterious town.",
    synopsis:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts. To save her parents and return to her world, Chihiro must work in a bathhouse for the spirits and find the courage she never knew she had.",
    image: "/images/anime-spirited.jpg",
    heroImage: "/images/anime-spirited.jpg",
    color: "#81b29a",
  },
  {
    id: "demon-slayer",
    title: "DEMON SLAYER",
    japaneseTitle: "鬼滅の刃",
    year: 2019,
    rating: "8.7",
    director: "Haruo Sotozaki",
    studio: "ufotable",
    genres: ["Action", "Fantasy", "Historical"],
    tagline: "Slay the demons, save humanity.",
    synopsis:
      "A family is attacked by demons and only two members survive — Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister. With his sword and unbreakable spirit, he faces terrifying demons and powerful allies.",
    image: "/images/anime-demon.jpg",
    heroImage: "/images/anime-demon.jpg",
    color: "#3d5a80",
  },
  {
    id: "jujutsu-kaisen",
    title: "JUJUTSU KAISEN",
    japaneseTitle: "呪術廻戦",
    year: 2020,
    rating: "8.6",
    director: "Sunghoo Park",
    studio: "MAPPA",
    genres: ["Action", "Supernatural", "Horror"],
    tagline: "Swallow the curse, wield the power.",
    synopsis:
      "A boy swallows a cursed talisman — the finger of a demon — and becomes cursed himself. He enters a shaman school to be able to locate the demon's other body parts and thus exorcise himself. In a world where cursed energy feeds on unsuspecting humans, Yuji Itadori must navigate dark battles alongside powerful sorcerers.",
    image: "/images/anime-jujutsu.jpg",
    heroImage: "/images/anime-jujutsu.jpg",
    color: "#264653",
  },
  {
    id: "totoro",
    title: "MY NEIGHBOR TOTORO",
    japaneseTitle: "となりのトトロ",
    year: 1988,
    rating: "8.6",
    director: "Hayao Miyazaki",
    studio: "Studio Ghibli",
    genres: ["Fantasy", "Family", "Adventure"],
    tagline: "Let's go meet the forest spirit.",
    synopsis:
      "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby. Satsuki and her little sister Mei discover that the nearby forest is inhabited by magical creatures called Totoros, and soon befriend the largest and most lovable of them all.",
    image: "/images/anime-totoro.jpg",
    heroImage: "/images/anime-totoro.jpg",
    color: "#606c38",
  },
  {
    id: "weathering-with-you",
    title: "WEATHERING WITH YOU",
    japaneseTitle: "天気の子",
    year: 2019,
    rating: "7.9",
    director: "Makoto Shinkai",
    studio: "CoMix Wave Films",
    genres: ["Romance", "Drama", "Fantasy"],
    tagline: "Can the weather really be controlled by love?",
    synopsis:
      "A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather. As Tokyo experiences record-breaking rain, Hodaka and Hina use her sunshine ability to bring joy to others, but their powers come at a price that threatens the balance of nature itself.",
    image: "/images/anime-weathering.jpg",
    heroImage: "/images/anime-weathering.jpg",
    color: "#457b9d",
  },
];
