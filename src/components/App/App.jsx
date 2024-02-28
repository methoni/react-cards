import React from 'react';
import { api } from '../../utils/Api';
import CardList from '../CardList/CardList.jsx';
import CardPopup from '../CardPopup/CardPopup.jsx';
import Filter from '../Filter/Filter.jsx';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addCards } from '../../slices/cardsSlice';

function App() {
  const dispatch = useDispatch();
  const { cards, isFiltered } = useSelector((state) => state.cards);

  React.useEffect(() => {
    api.getCards().then((data) => {
      dispatch(addCards(data));
    });
  }, []);

  const renderedCards = isFiltered
    ? cards.filter((card) => card.isLiked === true)
    : cards;

  return (
    <div className="page">
      <Filter />
      <CardList cards={renderedCards} />
      <CardPopup />
    </div>
  );
}

export default App;
