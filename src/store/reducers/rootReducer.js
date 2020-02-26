import { combineReducers } from 'redux';
import home from './home';
import photoGallery from './photoGallery';

const rootReducer = combineReducers({
  Home: home,
  PhotoGallery: photoGallery,
});

export default rootReducer;
