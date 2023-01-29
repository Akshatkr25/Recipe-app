import React from "react";
import style from "./Recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}> {title} </h1>
      <ol className={style.ingridient}>
        {ingredients.map((ingredient) => (
          <li> {ingredient.text} </li>
        ))}
      </ol>
      <p className={style.ingridient}>{Math.round(calories)} Calories</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
