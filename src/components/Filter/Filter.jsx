import React from 'react';
import './Filter.css';
import { useSelector, useDispatch } from 'react-redux';
import { setIsFiltered } from '../../slices/cardsSlice';

function Filter() {
  const isFiltered = useSelector((state) => state.cards.isFiltered);
  const dispatch = useDispatch();

  const handleCheckBoxClick = () => {
    dispatch(setIsFiltered());
  };

  return (
    <label className="filter">
      <div className="checkbox__container">
        <input
          type="checkbox"
          className="checkbox__button"
          onChange={handleCheckBoxClick}
        />
        <div className={`checkbox__area ${isFiltered && 'checkbox__area_on'}`}>
          <div className="checkbox__switcher"></div>
        </div>
      </div>
      <span className="checkbox__caption">
        {!isFiltered ? 'Нажмите, чтобы увидеть выбранные' : 'Нажмите, чтобы увидеть все карточки'}

      </span>
    </label>
  );
}

export default Filter;
