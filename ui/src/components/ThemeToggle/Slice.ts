import { createSlice } from "@reduxjs/toolkit";

type ThemeToggleState = { theme: "automatic" } | { theme: "light" } | { theme: "dark" };

const initialState: ThemeToggleState = { theme: "automatic" };
export const ThemeToggleSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});
