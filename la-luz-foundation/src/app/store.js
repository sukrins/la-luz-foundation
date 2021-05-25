import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../features/menu/menuSlice';
import memberReducer from '../features/member/memberSlice';


export const store = configureStore({
  reducer: {
    menu: menuReducer,
    member: memberReducer,
  },
});
