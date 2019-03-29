import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => {
        return <Card
          author={card.author}
          headline={card.headline}
          img={card.img}
          tab={card.tab}
          key={Math.random(1, 700)}
        />
      })}

    </div>
  )
}

// Make sure you include prop types for all of your incoming props

/* Using the cards prop, map over the list creating a
    new Card component for each passing the card as the only prop*/
export default Cards;
