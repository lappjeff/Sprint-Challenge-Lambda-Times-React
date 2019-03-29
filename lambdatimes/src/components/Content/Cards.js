import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

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

Card.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      headline: PropTypes.string,
      img: PropTypes.string,
      tab: PropTypes.string
    })
  )
}

export default Cards;
