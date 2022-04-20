import React from 'react';
import { Link } from "react-router-dom";


function ItemsList(props) {
    const {items, name} = props;
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {items.map((item, id) => <li key={id+1}><Link to={`/items/${id+1}`}>{item.name}</Link></li>)}
            </ul>
        </div>
    );
}

export default ItemsList;
