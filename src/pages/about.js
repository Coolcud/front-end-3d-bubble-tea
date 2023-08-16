import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-section">
      <h4 className="heading-styling">
        What is 3D Bubble Tea?
      </h4>
      <p className="paragraph-styling">
        3D Bubble Tea is a web app that provides a customizable
        3D experience! Bubble tea is a popular drink around the world
        with many different flavors and toppings. Because of this,
        we worked to give users a fun medium for viewing possible
        variations of drinks they could order in real life!
      </p>
      <p className="paragraph-styling">
        This web app utilizes React.js, three.js, and react-three-fiber
        to display the models and provide interactivity. The analytics
        utilize Apache Spark, pulling data from a Postgresql database
        deployed on Render, and the front end is deployed on AWS with Docker.
      </p>
      <h4 className="heading-styling">
        The Creators
      </h4>
      <p className="paragraph-styling">
        Julie Loh and Sage Choi became friends during their time as
        cohort 19 students of Ada Developers Academy. With a passion
        for artistry, coding, and bubble tea, we worked to merge
        all three into this project.
      </p>
      <h4 className="heading-styling">
        Resources
      </h4>
      <div className="resources-section">
        <a href="https://github.com/Coolcud/front-end-3d-bubble-tea">3D bubble tea GitHub</a>
        <a href="https://threejs.org/">threejs.org</a>
      </div>
    </div>
  );
};

export default About;