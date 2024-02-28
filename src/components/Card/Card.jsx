import React from 'react';
import './Card.css';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLiked, deleteCard, setIsSelected } from '../../slices/cardsSlice';

const Card = ({ id }) => {
  const dispatch = useDispatch();

  const card = useSelector((state) =>
    state.cards.cards.find((item) => item.id === id)
  );

  const handleDeleteClick = () => {
    dispatch(deleteCard(id));
  };

  const handleClick = () => {
    dispatch(setIsSelected(id));
  };

  const handleLikeClick = () => {
    dispatch(setIsLiked(id));
  };

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__like ${
    card.isLiked && 'card__like_check'
  }`;

  return (
    <li className="card card__item">
      <img
        src={card.imageUrl}
        alt={card.fullName}
        className="card__image"
        onClick={handleClick}
      />
      <button
        type="button"
        className="card__trash"
        onClick={handleDeleteClick}
      />
      <div className="card__line" onClick={handleClick}>
        <h2 className="card__title">{card.fullName}</h2>
        <button
          type="button"
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
        ></button>
      </div>
    </li>
  );
};

export default Card;
