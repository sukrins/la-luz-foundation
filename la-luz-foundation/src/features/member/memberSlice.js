import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    members: [
        { name: 'User One', desc: 'User One Desc' },
        { name: 'User Two', desc: 'User Two Desc' },
        { name: 'User Four', desc: 'User Four Desc' },
        { name: 'User Five', desc: 'User Five Desc' }
    ]
}

const memberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {}
});

export const selectMembers = state => state.member.members;

export default memberSlice.reducer;