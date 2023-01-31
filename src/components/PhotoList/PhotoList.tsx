import React from "react";
import { Photo } from "../../shared/types";

interface PhotoListProps {
  photos: Photo[];
}

const PhotoList: React.FC<PhotoListProps> = ({ photos }) => {
  return (
    <ul>
      {photos.map((photo: Photo) => {
        return <li key={photo.id}>{photo.title}</li>;
      })}
    </ul>
  );
};

export default PhotoList;
