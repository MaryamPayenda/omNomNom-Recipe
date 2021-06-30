import React, { useState, useEffect } from "react";
// import Axios from "axios";
import { Link } from "react-router-dom";

function Categories() {
  // useEffect(() => {
  //   const meat =fetch(url);
  // });
  // const meat = () => await fetch(url);
  // console.log(meat);
  return (
    <div className="categories">
      <Link to="/Dishes/meat">
        <div type="meat" />
        <div className="meat">Meat</div>
      </Link>
      <Link to="/Dishes/vegetarian">
        <div className="vegetarian">Vegetarian</div>
        {/* <Dishes type="Vegetarian" /> */}
      </Link>
      <Link to="/Dishes/vegan">
        <div className="vegan">Vegen</div>
        {/* <Dishes type="vegan"></Dishes> */}
      </Link>
    </div>
  );
}

export default Categories;
