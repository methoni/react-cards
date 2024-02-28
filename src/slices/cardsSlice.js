import { createSlice } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
  cards: [],
  isFiltered: false,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    addCards(state, action) {
      state.cards = action.payload.map((card) => ({
        id: card.id,
        imageUrl: card.imageUrl,
        fullName: card.fullName,
        isLiked: false,
      }));
    },

    setIsLiked(state, action) {
      const id = action.payload;
      const index = state.cards.findIndex((card) => card.id === id);
      state.cards[index].isLiked = !state.cards[index].isLiked;
      state.cards[index].isSelected = !state.cards[index].isSelected;
    },

    setIsFiltered(state) {
      state.isFiltered = !state.isFiltered;
    },

    deleteCard(state, action) {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },

    setIsSelected(state, action) {
      const id = action.payload;
      const index = state.cards.findIndex((card) => card.id === id);
      state.cards[index].isSelected = !state.cards[index].isSelected;
    },
  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const {
  addCards,
  setIsLiked,
  setIsFiltered,
  deleteCard,
  setIsSelected,
} = cardsSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default cardsSlice.reducer;
