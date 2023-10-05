import { configureStore } from "@reduxjs/toolkit"
import infoSlice from "../reducer/infoSlice"
import thunk from "redux-thunk"

export const store = configureStore({
  reducer: {
    info: infoSlice,
  },
  middleware: [thunk]
})
