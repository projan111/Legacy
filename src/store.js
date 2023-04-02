import { configureStore, createSlice } from "@reduxjs/toolkit";
import { imageData } from "../catList/newList";
// create a slice
export const imageSlice = createSlice({
  name: "image",
  initialState: {
    images: imageData,
  },
  reducers: {
    addImage: (state, action) => {
      state.images = [...state.images, ...action.payload];
    },
  },
});

// config the store
const store = configureStore({
  reducer: {
    image: imageSlice.reducer,
  },
});

// export the action
export const { addImage } = imageSlice.actions;

export default store;
