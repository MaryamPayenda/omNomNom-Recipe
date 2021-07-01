import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div>
      <h2>Our favorite Categories</h2>
      <div className="categories">
        <Link to="/Dishes/meat">
          <div className="meat">
            <img
              src={`${process.env.PUBLIC_URL}/img/catogories11.jpg`}
              id="meat_img"
            />
            Meat
          </div>
        </Link>
        <Link to="/Dishes/vegetarian">
          <div className="vegetarian">
            <img
              src={`${process.env.PUBLIC_URL}/img/catogories22.jpg`}
              id="vegetarian_img"
            />
            Vegetarian
          </div>
        </Link>
        <Link to="/Dishes/vegan">
          <div className="vegan">
            <img
              src={`${process.env.PUBLIC_URL}/img/catogories33.jpg`}
              id="vegan_img"
            />
            Vegan
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
