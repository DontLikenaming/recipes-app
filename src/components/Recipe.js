import React from "react";

const Recipe = ({ name, ingredients, steps }) => {
    return (
        <section id="baked-salmon">
            <h3>{name}</h3>
            <ul className="ingredients">
                {ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient.name}</li>
                ))}
            </ul>
            <section className="instructions">
                <h3>Instruction</h3>
                {steps.map((step, i) => (
                    <p key={i}>{step}</p>
                ))}
            </section>
        </section>
    );
}

export default Recipe;