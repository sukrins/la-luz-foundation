import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    options: ['About Us', 'Our Members', 'Apply Today']
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {}
});

export const selectMenuOptions = state => state.menu.options;

export default menuSlice.reducer;