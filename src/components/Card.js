import React from 'react';

function Card(props) {
    return (
        <div style={{ width: '250px', height: '250px', overflow: 'hidden'}}>
        <img src={props.imageUrl} />
        </div>
    )
}

export default Card;
