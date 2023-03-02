import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";
import Logo from "../../public/images/smile.png";


const Recipe = ({ name, ingredients, steps }) => {
    let fname = name.toLowerCase().replace(/ /g, '-');
    return (
        <React.StrictMode>
            <div><img src={Logo} /></div>
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