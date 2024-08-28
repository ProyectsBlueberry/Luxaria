import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    location: number | string;
    drink_id_selected: string;
    cocktail_id_selected: string;
    drink_name: string;
    drink_id_context: number;
}

const initialState: State = {
    location: 0,
    drink_id_selected: '',
    cocktail_id_selected: '',
    drink_name: '',
    drink_id_context: 0,
};

const mySlice = createSlice({
    name: 'mySlice',
    initialState,
    reducers: {
        setLocation(state, action: PayloadAction<string | number>) {
            state.location = action.payload;
        },
        setDrinkSelected(state, action: PayloadAction<string>) {
            state.drink_id_selected = action.payload;
        },
        setCocktail_Selected(state, action: PayloadAction<string>) {
            state.cocktail_id_selected = action.payload;
        },
        setDrinkName(state, action: PayloadAction<string>) {
            state.drink_name = action.payload;
        },
        setDrinkID(state, action: PayloadAction<number>) {
            state.drink_id_context = action.payload;
        }
    }
});

export const { setLocation, setDrinkSelected, setDrinkName, setDrinkID, setCocktail_Selected } = mySlice.actions;
export default mySlice.reducer;
