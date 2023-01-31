import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState, PhotoModals, PhotoState } from "./types";

const initialState: PhotoState = {
  modals: {
    [PhotoModals.VIEW_MODAL]: {
      open: false,
    },
  },
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
