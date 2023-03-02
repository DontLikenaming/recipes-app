import React from "react";
import Recipe from "./Recipe";

const Menu = ({ recipes }) => {
    return (
        <article>
            <header>
                <h1>Food Recipe</h1>
            </header>
            <div className="recipes">
                {recipes.map((recipe, i) => (
                    <Recipe key={i} {...recipe} />
                ))}
            </div>
        </article>
    );
}
export default Menu;