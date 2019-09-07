import React, {Component} from "react";
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {connect} from 'react-redux';
import WeatherCard from './Card';

class CardWrapper extends Component {  
  constructor(props) {
      super(props);
  }
  render() {
      return (
            <WeatherCard list={this.props.fetchData} />
      );
  }
}

const mapStateToProps = state => {
  return {
    fetchData : state.weather
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    testWeather: function(data) {
      dispatch({type: "ADD_WEATHER", payload: data});
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardWrapper)
 