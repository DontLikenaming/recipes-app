import React from "react";

const Instructions = ({ title, steps }) => {
    return (
        <React.StrictMode>
            <section className="instructions">
                <h3>{title}</h3>
                {steps.map((s, i) => (
                    <p key={i}>{s}</p>
                ))}
            </section>
        </React.StrictMode>
    );
}

export default Instructions;