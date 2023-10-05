import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchObj from "./axiosAPI";

export const fetchList = createAsyncThunk(
  "fetchList",
  async (url) => {
    const response = await fetchObj.get(url);
    return response.data;
  }
)

export const logout = createAsyncThunk(
  "logout",
  async (url) => {
    const response = await fetchObj.post(url);
    return response;
  }
)

export const createItem = createAsyncThunk(
  "createItem",
  async ({url, newItem} ) => {
    const response = await fetchObj.post(url, newItem);
    return response;
  }
)

export const deleteItem = createAsyncThunk(
  "deleteItem",
  async (url) => {
    const response = await fetchObj.delete(url);
    return response;
  }
)