import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Modals, ModalState, PhotoModals, PhotoState } from "./types";

export const defaultModalsState: Modals = {
  [PhotoModals.VIEW_MODAL]: {
    open: false,
  },
};

export const initialState: PhotoState = {
  modals: defaultModalsState,
};

export const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    togglePhotoModal(state, action: PayloadAction<ModalState>) {
      state.modals[action.payload.target] = {
        open: action.payload.open,
      };
    },
  },
});

export const { togglePhotoModal } = photoSlice.actions;

export default photoSlice.reducer;
