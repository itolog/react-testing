export enum PhotoModals {
  VIEW_MODAL = "view_modal",
}

export interface ModalState {
  open: boolean;
  target: PhotoModals;
}

type Modals = {
  [Modal in PhotoModals]: Omit<ModalState, "target">;
};

export interface PhotoState {
  modals: Modals;
}
