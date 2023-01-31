import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Photo } from "../../shared/types";

const PhotosPage = () => {
  const data = useLoaderData() as { photos: Photo[] };

  return (
    <div>
      <h1> PhotoPage</h1>
      <Suspense fallback={"Loading ..."}>
        <Await resolve={data.photos}>
          {(photos) => {
            return (
              <ul>
                {photos.map((photo: Photo) => {
                  return <li key={photo.id}>{photo.title}</li>;
                })}
              </ul>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default PhotosPage;
