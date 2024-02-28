import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSelected } from '../../slices/cardsSlice';
import './CardPopup.css';

function CardPopup() {
  const card = useSelector((state) =>
    state.cards.cards.find((card) => card.isSelected === true)
  );

  const dispatch = useDispatch();

  const handleBackClick = () => {
    dispatch(setIsSelected(card.id));
  };

  return (
    card && (
      <div className={`popup ${card.isSelected ? 'popup_opened' : ''}`}>
        <div className="popup__card">
          <img src={card.imageUrl} alt={card.fullName} className="popup__pic" />
          <h2 className="popup__caption">{card.fullName}</h2>
          <button
            type="button"
            className="popup__button"
            onClick={handleBackClick}
          >
            Вернуться к списку карточек
          </button>
        </div>
      </div>
    )
  );
}
export default CardPopup;
