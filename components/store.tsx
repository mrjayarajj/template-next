import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const dummySlice = createSlice({
  name: "curd",
  initialState: {},
  reducers: {
    putObj: (state, action) => {
      //state.obj = action.payload;
    },
    deleteObj: (state, action) => {
      //state.obj = undefined
    }
  }
})

export const {
  putObj,
  deleteObj } = dummySlice.actions;

//export default dummySlice;

// The store now has redux-thunk added and the Redux DevTools Extension is turned on
export default configureStore({
  reducer: {
    dummyrReducer: dummySlice.reducer
  },
});
