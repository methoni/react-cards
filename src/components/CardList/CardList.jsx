import React from 'react';
import './CardList.css';
import Card from '../Card/Card.jsx';

function CardList({ cards }) {
  return (
    <section className="cards" aria-label="Фото">
      <ul className="cards__list">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} />
        ))}
      </ul>
    </section>
  );
}

export default CardList;
