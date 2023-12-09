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
import SearchComponent from "../../components/SearchComponent";

export const link = [
  {
    id: 1,
    path: "/noobar-react/",
    text: "HOME",
    icon: "fa-solid fa-home",
  },
  {
    id: 2,
    path: "/noobar-react/movie",
    text: "MOVIE",
    icon: "fa-solid fa-film",
  },
  {
    id: 3,
    path: "/noobar-react/series",
    text: "SERIES",
    icon: "fa-solid fa-tv",
  },
];

export const companies = [
  { id: 1, img: compG1, vid: compV1, link: "https://www.disney.com", title: "Disney" },
  { id: 2, img: compG2, vid: compV2, link: "https://www.pixar.com", title: "Pixar" },
  { id: 4, img: compG3, vid: compV3, link: "https://www.marvel.com", title: "Marvel" },
  { id: 3, img: compG4, vid: compV4, link: "https://www.nationalgeographic.com", title: "National Geographic" },
  { id: 5, img: compG5, vid: compV5, link: "https://www.starwars.com", title: "Star Wars" },
];
