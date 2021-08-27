import todosReducer from "./contacts/contacts-reducer";
import { configureStore } from "@reduxjs/toolkit";

import { getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";


const middleware = [
  ...getDefaultMiddleware(),
  // logger,
];

const store = configureStore({
  reducer: {
    contacts: todosReducer,
  },
  middleware,
});


// eslint-disable-next-line import/no-anonymous-default-export
export default { store };
