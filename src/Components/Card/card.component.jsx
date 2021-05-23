import React from 'react';
import './card.styles.css';


export const Card = (props) => (
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.monster.id+'chikimoy'}?set=set4&size=200x200`}/>
        <h2>{props.monster.name}</h2>
        <p><b>{props.monster.username}</b></p>
        <p> {props.monster.email}</p>
    </div>
)