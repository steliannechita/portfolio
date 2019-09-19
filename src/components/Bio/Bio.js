import React from "react";
import "./Bio.css";

function Bio() {
  return (
    <div id="bio">
      <div className="bio">
        <h1>BIO</h1>
        <h4>
          Welcome to my web page! I am Stelian,{" "}
          <span>passionate self-taught web developer</span>
        </h4>
        <p>
          My coding journey began in 2018 when I get to watch “Introduction to
          Computer Science” video, by edX, Harvard OpenCourseWare. As I have
          always been an analytical mind, this aroused my curiosity.
          <br />
          <br />
          Currently, I'm attending regularly the Codecademy London weekends
          meetups, helping people learn tools and techniques required in
          professional web development through competitive coding and portfolio
          building. As developers with various level of knowledge attend the
          meetup, I am fortunate to be in an environment which allows me to work
          in groups, learn new solving problems techniques and different
          approaches from experienced developers, accelerating my learning and
          ability to adapt in a professional environment.
          <br />
          <br />
          React JS is my favorite technology so far and I have built multiple
          functional projects with it. At the moment, I am working towards
          enhancing my React and JavaScript skills and I am looking forward to
          learn also React Native and Back-End technologies.
          <br />
          <br />
          In my spare time, I love to travel around the world and explore
          different places, cultures and their history, go to the gym, spend
          time with friends, also outdoor activities like cycling, hiking ,
          swimming or playing tennis.
        </p>
      </div>
    </div>
  );
}

export default Bio;
