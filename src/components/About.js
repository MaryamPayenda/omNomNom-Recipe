import React from "react";
import { HiHeart } from "react-icons/hi";
const About = () => {
  return (
    <div className="roundAbout">
      {" "}
      <div className="about">
        <h2>About us</h2>
        <p>
          We are aspiring web developers. <br></br>Our group project is based on
          an API. Because we all enjoy good food, we chose an API which provides
          us with great range of delicious recipes from all over the world –
          feel free to get inspired! <br></br>We hope you enjoy our project.
          <br></br>
          <b>
            <HiHeart /> Maryam, Omar & Catha
          </b>
        </p>
        <h4>Credits</h4>
        <p>
          We used in this Project:
          <ul>
            <li>
              API:{" "}
              <a href="https://www.edamam.com/" target="blank">
                EDAMAM API
              </a>
            </li>
            <li>
              Fonts:{" "}
              <a
                href="https://fonts.google.com/specimen/Open+Sans"
                target="blank"
              >
                Open Sans
              </a>{" "}
              &{" "}
              <a href="https://www.dafont.com/mistrully.font" target="blank">
                Mistrully
              </a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default About;
