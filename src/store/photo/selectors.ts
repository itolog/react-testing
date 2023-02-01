import { createSelector } from "reselect";
import { AppState } from "../index";

export const photoState = (state: AppState) => {
  return state.photo;
};

export const getModalsState = createSelector(photoState, (state) => {
  return state.modals;
});
