import requestApi from "../api/cardApi";
import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';

function CardGrid() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        requestApi.get().then((res) => {
            setItems(res.data.items);
        });
    }, []);

    return (
        <div className="container">
            <div className="row">
            {
                items ? items.map((item, index) => <Card key={item.id} index={index} data={item} />) : 'There is no data'
            }
            </div>
        </div>
    )
}

export default CardGrid;