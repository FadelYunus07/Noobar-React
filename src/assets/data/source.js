// Gambar Companies
import compG1 from "../image/disney.png";
import compG2 from "../image/pixar.png";
import compG3 from "../image/marvel.png";
import compG4 from "../image/nationalG.png";
import compG5 from "../image/starwar.png";

// Video Companies
import compV1 from "../video/disney.mp4";
import compV2 from "../video/pixar.mp4";
import compV3 from "../video/marvel.mp4";
import compV4 from "../video/national-geographic.mp4";
import compV5 from "../video/star-wars.mp4";

export const link = [
  {
    id: 1,
    path: "/",
    text: "HOME",
    icon: "fa-solid fa-home",
  },
  {
    id: 2,
    path: "#",
    text: "SEARCH",
    icon: "fa-solid fa-magnifying-glass",
  },
  {
    id: 3,
    path: "/watchlist",
    text: "WATCHLIST",
    icon: "fa-solid fa-plus",
  },
  {
    id: 4,
    path: "/original",
    text: "ORIGINALS",
    icon: "fa-solid fa-star",
  },
  {
    id: 5,
    path: "/movie",
    text: "MOVIE",
    icon: "fa-solid fa-film",
  },
  {
    id: 6,
    path: "/series",
    text: "SERIES",
    icon: "fa-solid fa-tv",
  },
];

export const companies = [
  { id: 1, img: compG1, vid: compV1, title: "Disney" },
  { id: 2, img: compG2, vid: compV2, title: "Pixar" },
  { id: 4, img: compG3, vid: compV3, title: "Marvel" },
  { id: 3, img: compG4, vid: compV4, title: "National Geographic" },
  { id: 5, img: compG5, vid: compV5, title: "Star Wars" },
];
