import { createSlice } from "@reduxjs/toolkit"
import { fetchList, logout } from "../utils/services"

const initialState = {
  token: "",
  accounts: [],
}

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setToken: (state, action) => {
      const token = action.payload
      state.token = token
    },
    getAccounts: (state, action) => {
      const account = action.payload
      state.accounts = [...account]
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchList.fulfilled, (state, action) => {
      state.accounts = [...action.payload]
    }),
    builder.addCase(logout.fulfilled, () => {
      localStorage.removeItem('token')
    })
  },
})

export const { getAccounts, setToken } = infoSlice.actions

export default infoSlice.reducer
