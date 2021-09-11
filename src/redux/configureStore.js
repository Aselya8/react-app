import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

const store = ConfigureStore();

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
};