import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
// MUI
import { Modal } from "@mui/material";
import { useSelector } from "react-redux";
// TYPES
import { PhotoModals } from "../../store/photo/types";
import { Photo } from "../../shared/types";
// STORE
import { getModalsState } from "../../store/photo/selectors";
import { useAppDispatch } from "../../store";
import { togglePhotoModal } from "../../store/photo/photoSlice";
// STYLES
import styles from "./photoPage.module.scss";
// COMPONENTS
import PhotoList from "../../components/PhotoList/PhotoList";

const PhotoPage = () => {
  const data = useLoaderData() as { photos: Photo[] };
  const dispatch = useAppDispatch();

  const { view_modal: viewModalState } = useSelector(getModalsState);

  const handleCloseModal = () => {
    dispatch(
      togglePhotoModal({
        target: PhotoModals.VIEW_MODAL,
        open: false,
      }),
    );
  };

  return (
    <div className={styles.PhotoPage}>
      <h1 className={styles.Title}>PhotoPage</h1>
      <Suspense fallback={"Loading ..."}>
        <Await resolve={data.photos}>
          {(photos) => {
            return <PhotoList photos={photos} />;
          }}
        </Await>
      </Suspense>

      <Modal open={viewModalState.open} onClose={handleCloseModal}>
        <div>
          <button onClick={handleCloseModal}>close</button>
          <div>as</div>
        </div>
      </Modal>
    </div>
  );
};

export default PhotoPage;
