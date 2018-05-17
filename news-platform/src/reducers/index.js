import {combineReducers} from 'redux';
import {news} from './news'
const reducers = {
	news: news,
}
export const reducer = combineReducers(reducers);