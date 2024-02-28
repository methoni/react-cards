class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  // проверка ответа сервера и преобразование из json
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  // получение карточек персонажей с сервера
  getCards() {
    return fetch(`${this._baseUrl}/`).then((res) => this._getResponseData(res));
  }
}

// создание экземпляра класса Api
export const api = new Api({
  baseUrl: 'https://ThronesApi.com/api/v2/Characters',
});
