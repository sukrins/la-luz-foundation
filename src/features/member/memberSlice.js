import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    members: [
        { name: 'Manuel Carrera', desc: 'User One Desc' },
        { name: 'Edgar Montiel', desc: 'User Two Desc' },
        { name: 'Carlos Jaramillo', desc: 'User Four Desc' },
        { name: 'Bart Zona', desc: 'User Five Desc' },
        { name: 'Daniel Perez', desc: 'User Six Desc' }
    ]
}

const memberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {}
});

export const selectMembers = state => state.member.members;

export default memberSlice.reducer;