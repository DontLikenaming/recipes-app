import React from "react";

const Ingredient = ({ amount, measurement, name }) => {
    return (
        <React.StrictMode>
            <li>
                {name} {amount} {measurement}
            </li>
        </React.StrictMode>
    );
}

export default Ingredient;