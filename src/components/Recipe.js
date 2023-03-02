import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";


const Recipe = ({ name, ingredients, steps }) => {
    let fname = name.toLowerCase().replace(/ /g, '-');
    return (
        <React.StrictMode>
            <section id={fname}>
                <h3>{name}</h3>
                <div><img src={`./images/${fname}.png`} /></div>
                <IngredientsList list={ingredients} />
                <Instructions title="조리 방법" steps={steps} />
            </section>
        </React.StrictMode>
    );
}

export default Recipe;