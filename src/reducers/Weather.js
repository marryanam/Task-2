import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

/*start state*/
const initialState = {
	name: "No name"
};

export default function WeatherReducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_WEATHER": {
        	return state.list = action.payload;                 
        }
        default: return state;
    }
}