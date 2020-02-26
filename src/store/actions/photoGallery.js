export const ActionTypes = {
  PHOTO_GALLERY: 'actions/photoGallery/PHOTO_GALLERY',
  LOAD: 'actions/photoGallery/LOAD',
};

const setPhotoGallery = payload => {
  //  console.log('Payload is ', payload);
  return {
    type: ActionTypes.PHOTO_GALLERY,
    payload,
  };
};

const setLoading = () => {
  return {
    type: ActionTypes.LOAD,
  };
};

export const Actions = {
  setPhotoGallery,
  setLoading,
};
