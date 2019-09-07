import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
/*reducer*/
import WeatherReducer from './reducers/Weather';

const rootReducer = combineReducers({
	weather:WeatherReducer,
});

export default function configureStore() {  
  return createStore(rootReducer, {}, applyMiddleware(thunk));
}
