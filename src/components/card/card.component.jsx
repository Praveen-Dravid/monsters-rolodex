import React from 'react';
import './card.styles.css';

export const Card = (props1)=> (
    <div>
        <img alt='monstor' src={`https://robohash.org/${props1.monstor.id}?set=set2&size=180x180`}></img>
        <h2>{props1.monstor.name}</h2>
        <p>{props1.monstor.email}</p>
        
    </div>
)