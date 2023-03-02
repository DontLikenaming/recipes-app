import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";


const Recipe = ({ name, ingredients, steps }) => {
    return (
        <React.StrictMode>
        <section id={name.toLowerCase().replace(/ /g, '-')}>
            <h3>{name}</h3>
            <IngredientsList list={ingredients} />
            <Instructions title="조리 방법" steps={steps} />
        </section>
        </React.StrictMode>
    );
}

export default Recipe;