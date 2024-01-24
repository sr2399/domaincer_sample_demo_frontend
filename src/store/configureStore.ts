import {  combineReducers, applyMiddleware, compose } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



