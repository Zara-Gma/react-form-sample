import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: "root",
  initialState: {
    FirstPage: "",
    SecondPage: "",
    ThirdPage: "",
    FourthPage: "",
  },
  reducers: {
    chooseFirstPage: (state, action) => { state.FirstPage = action.payload },
    chooseSecondPage: (state, action) => { state.SecondPage = action.payload },
    chooseThirdPage: (state, action) => { state.ThirdPage = action.payload },
    chooseFourthPage: (state, action) => { state.FourthPage = action.payload },
  }
})

export const reducer = rootSlice.reducer;

export const { chooseFirstPage, chooseSecondPage, chooseThirdPage, chooseFourthPage } = rootSlice.actions