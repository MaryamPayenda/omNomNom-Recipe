import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  const APP_ID = "271b281a";
  const APP_KEY = "88c627abf78667444cf4d804190f1b2c";
  const meat = fetch(
    `https://api.edamam.com/search?q=meat&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
  return (
    <div className="categories">
      <Link to={meat}>
        <div className="meat">Meat</div>
      </Link>
      <Link>
        <div className="vegetarian">Vegetarian</div>
      </Link>
      <Link>
        <div className="vegan">Vegen</div>
      </Link>
    </div>
  );
}

export default Categories;
