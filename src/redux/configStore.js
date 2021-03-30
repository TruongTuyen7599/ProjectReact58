import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
    // nơi chứa toàn bộ state của ứng dụng
});

export const store = createStore(rootReducer);