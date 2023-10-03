import {createSlice} from "@reduxjs/toolkit";

const initialState = null

export const heroSlice = createSlice({
  name: 'ram',
  initialState,
  reducers: {
    addChars(state, action){
      return action.payload
    }
  }
})

export const heroActions = heroSlice.actions
export const heroReducer = heroSlice.reducer
