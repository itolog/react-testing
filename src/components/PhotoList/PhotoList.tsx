import React from "react";
// MUI
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// TYPES
import { Photo } from "../../shared/types";
import { togglePhotoModal } from "../../store/photo/photoSlice";
import { PhotoModals } from "../../store/photo/types";
import { useAppDispatch } from "../../store";

interface PhotoListProps {
  photos: Photo[];
}

const PhotoList: React.FC<PhotoListProps> = ({ photos }) => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(
      togglePhotoModal({
        target: PhotoModals.VIEW_MODAL,
        open: true,
      }),
    );
  };
  return (
    <List>
      {photos.map((photo: Photo) => {
        return (
          <ListItem
            key={photo.id}
            secondaryAction={
              <IconButton onClick={handleOpenModal} edge="end" aria-label="delete">
                <RemoveRedEyeIcon />
              </IconButton>
            }>
            <ListItemAvatar>
              <Avatar src={photo.thumbnailUrl} />
            </ListItemAvatar>
            <ListItemText primary={photo.title} />
          </ListItem>
        );
      })}
    </List>
  );
};
export default PhotoList;
