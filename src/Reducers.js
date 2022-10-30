import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  c: 20,
};

const counterReducer = createReducer(initialState, {
  INCREMENT: (state) => {
    state.c += 1;
  },

  INCREMENT_BY_VALUE: (state, action) => {
    state.c += action.payload;
  },

  DECREMENT: (state) => {
    state.c -= 1;
  },
});

export default counterReducer;
