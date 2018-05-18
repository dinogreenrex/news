import orderBy from 'lodash/sortBy'
import cloneDeep from 'lodash/clone'
let records = 0;
let clonedRecords = 0;
export const news = (state = {
	records: 0,
	record: 0,
}, action) => {
	switch(action.type){
		case 'LOAD_NEWS':
			records = action.payload;
			return Object.assign({}, state, {
				records: records,
				loading: true,
		});
		case 'LOAD_NEWS_SUCCESS':
			return Object.assign({}, state, {
				records: action.payload,
				loading: false,
				success: true,
			})
		case 'LOAD_NEWS_ERROR':
			return Object.assign({}, state, {
				error: action.error,
				loading: true,
			})
		case 'LOAD_RECORD':
			return Object.assign({}, state, {
				loading: true,
			})
		case 'LOAD_RECORD_SUCCESS':
			return Object.assign({}, state, {
				record: action.payload,
				loading: false,
				success: true,
			})
		case 'LOAD_RECORD_ERROR':
			return Object.assign({}, state, {
				record: action.error,
				loading: false,
			})
		case 'ORDER_BY_TITLE':
			clonedRecords = cloneDeep(state.records);
			return Object.assign({}, state, {
				records: orderBy(clonedRecords, ['title'], ['asc']),
				filter: "title"
			})
		case 'ORDER_BY_DATE':
			clonedRecords = 0;
			clonedRecords = state.records.slice();
			return Object.assign({}, state, {
				records: orderBy(clonedRecords, ['createdat'], ['asc']),
				filter: "date"
			})
		default:
			return state;
	}
}