import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
// TYPES
import { Photo } from "../../shared/types";
// STYLES
import styles from "./photoPage.module.scss";
// COMPONENTS
import PhotoList from "../../components/PhotoList/PhotoList";

const PhotoPage = () => {
  const data = useLoaderData() as { photos: Photo[] };

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
    </div>
  );
};

export default PhotoPage;
