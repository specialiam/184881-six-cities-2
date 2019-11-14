// import mockOffers from '../../mocks/offers';

export const INITIAL_STATE = {
  city: ``,
  sortType: `Popular`,
  initOffers: [],
  offers: [],
  activeCard: null,
  actualCities: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state, {city: action.payload});

    case `SET_INIT_OFFERS`:
        return Object.assign({}, state, {initOffers: action.payload});

    case `CHANGE_OFFERS`:
      return Object.assign({}, state, {offers: action.payload});
    
    case `CHANGE_ACTUAL_CITIES`:
      return Object.assign({}, state, {actualCities: action.payload});

    case `CHANGE_SORT_TYPE`:
      return Object.assign({}, state, {sortType: action.payload});

    case `SET_ACTIVE_CARD`:
      return Object.assign({}, state, {activeCard: action.payload});

    case `RESET`:
      return Object.assign({}, INITIAL_STATE);
  }

  return state;
};
