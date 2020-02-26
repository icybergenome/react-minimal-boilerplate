import { ActionTypes } from '../actions/photoGallery';

const initialState = {
  welcomeText: 'Av: Boilerplate',
  load: false,
};

export default (state = initialState, action) => {
  //  console.log('Reducers state is', action.payload);
  switch (action.type) {
    case ActionTypes.PHOTO_GALLERY:
      return {
        ...state,
        welcomeText: action.payload,
      };
    case ActionTypes.LOAD:
      return {
        ...state,
        load: true,
      };

    default:
      return state;
  }
};
