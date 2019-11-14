import {connect} from 'react-redux';
import * as ActionCreator from './actions';
import App from './app';

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.app.city,
  placeCards: state.app.offers,
  sortType: state.app.sortType,
  activeCard: state.app.activeCard,
  actualCities: state.app.actualCities,
});

const mapDispatchToProps = (dispatch) => ({
  cityFilterClickHandler: (city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch((...args) => ActionCreator.getOffers(...args));
  },

  optionsClickHandler: (option) => {
    dispatch(ActionCreator.changeSortType(option));
  },

  cardHoverHandler: (card) => {
    dispatch(ActionCreator.setActiveCard(card));
  },

  loadOffers: () => dispatch((...args) => ActionCreator.init(...args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
