import { ActionReducerMap } from '@ngrx/store';
import { pizzaReducer } from '../../components/pizza/pizza.reducer';

export const reducers: ActionReducerMap<any> = {
    pizza: pizzaReducer
};