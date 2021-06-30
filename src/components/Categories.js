import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="categories">
      <Link to="/Dishes/meat">
        <div className="meat">Meat</div>
      </Link>
      <Link to="/Dishes/vegetarian">
        <div className="vegetarian">Vegetarian</div>
      </Link>
      <Link to="/Dishes/vegan">
        <div className="vegan">Vegen</div>
      </Link>
    </div>
  );
}

export default Categories;
