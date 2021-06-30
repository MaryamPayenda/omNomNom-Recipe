import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import meat_img from "../img/catogories11.jpg";
import vegetarian_img from "../img/catogories22.jpg";
import vegan_img from "../img/catogories33.jpg";

function Categories() {
  return (
    <div className="categories">
      <Link to="/Dishes/meat">
        <div className="meat">
          <img src={meat_img} id="meat_img" />
          Meat
        </div>
      </Link>
      <Link to="/Dishes/vegetarian">
        <div className="vegetarian">
          <img src={vegetarian_img} id="vegetairian_img" />
          Vegetarian
        </div>
      </Link>
      <Link to="/Dishes/vegan">
        <div className="vegan">
          <img src={vegan_img} id="vegan_img" />
          Vegen
        </div>
      </Link>
    </div>
  );
}

export default Categories;
