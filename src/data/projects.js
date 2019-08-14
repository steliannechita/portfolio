import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const PROJECTS = [
  {
    id: 1,
    title: "Random Quote Generator",
    description:
      "Random Quote Generator is a web application where users can get their inspiring quote of the day. Quotes are rendered from local database which I have personally created, containing a lot of my favorite quotes.",
    link: " https://steliannechita.github.io/random-quote-generator/",
    image: project1,
    sourceCode: "https://github.com/steliannechita/random-quote-generator"
  },
  {
    id: 2,
    title: "Meme generator",
    description:
      "Meme generator is a simple web application that fetches data (random images) from an API (https://api.imgflip.com) and allows user to add text captions to established memes and changing the font size.Give it a try, it's a lot of fun!",
    link: "https://steliannechita.github.io/meme-generator/",
    image: project2,
    sourceCode: "https://github.com/steliannechita/meme-generator"
  },
  {
    id: 3,
    title: "Ravenous",
    description:
      "Ravenous is a web application that acts as a Yelp.com clone, where users can search for their favorite restaurants or type of food within a specific area, filtering results using available sort options.",
    link: "https://steliannechita.github.io/ravenous/",
    image: project3,
    sourceCode: "https://github.com/steliannechita/ravenous"
  }
];

export default PROJECTS;
