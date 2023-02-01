import { initialState, photoSlice } from "./photoSlice";
import { PhotoModals } from "./types";

describe("Photo Reducer", () => {
  it("modal view photo", function () {
    expect(
      photoSlice.reducer(
        initialState,
        photoSlice.actions.togglePhotoModal({
          target: PhotoModals.VIEW_MODAL,
          open: true,
        }),
      ),
    ).toEqual({
      modals: {
        [PhotoModals.VIEW_MODAL]: {
          open: true,
        },
      },
    });

    expect(
      photoSlice.reducer(
        initialState,
        photoSlice.actions.togglePhotoModal({
          target: PhotoModals.VIEW_MODAL,
          open: false,
        }),
      ),
    ).toEqual({
      modals: {
        [PhotoModals.VIEW_MODAL]: {
          open: false,
        },
      },
    });
  });
});
