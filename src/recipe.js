import React from 'react';
import "./App.css";

function recipe({title , calories, image , ingredients}) {
    return (
        <div className="title-resipe">
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className="image" src={image} alt="" />
        </div>
    )
}

export default recipe;
