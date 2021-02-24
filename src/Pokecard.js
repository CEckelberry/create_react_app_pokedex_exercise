import React from 'react';
import "./Pokecard.css"

const PokeAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const PokeCard = (props) => {
    let imgSrc = `${PokeAPI}/${props.id}.png`;

    return (
        <div className="Pokecard">
            <div className="Pokecard-title">{props.name}</div>
            <img className="Pokecard-img" src={imgSrc} />
            <div className="Pokecard-type">Type: {props.type}</div>
            <div className="Pokecard-exp">EXP: {props.exp}</div>
        </div>
    )
}

export default PokeCard;