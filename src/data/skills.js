import html from "../assets/tech-icons/html5.png";
import css3 from "../assets/tech-icons/css3.png";
import javascript from "../assets/tech-icons/javascript.png";
import react from "../assets/tech-icons/react.png";
import git from "../assets/tech-icons/git.png";
import github from "../assets/tech-icons/github.png";
import Heroku from "../assets/tech-icons/Heroku.png";
import jQuery from "../assets/tech-icons/jQuery.png";
import node from "../assets/tech-icons/node.png";
import Python from "../assets/tech-icons/Python.png";

const skills = {
  confident: [
    {
      id: 1,
      name: "HTML 5",
      url: html
    },
    {
      id: 2,
      name: "CSS 3",
      url: css3
    },
    {
      id: 3,
      name: "JavaScript",
      url: javascript
    },
    {
      id: 4,
      name: "React",
      url: react
    }
  ],
  comfortable: [
    {
      id: 1,
      name: "Git",
      url: git
    },
    {
      id: 2,
      name: "GitHub",
      url: github
    },
    {
      id: 3,
      name: "Node js",
      url: node
    },
    {
      id: 4,
      name: "jQuery",
      url: jQuery
    }
  ],
  dabbledWith: [
    { id: 1, name: "Python", url: Python },
    { id: 2, name: "Heroku", url: Heroku }
  ]
};

export default skills;
