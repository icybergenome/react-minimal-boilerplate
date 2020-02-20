import React from 'react';
import {Link} from 'react-router-dom'
import Home from '../Containers/Home/Home';
import Form from '../Containers/Calculator/Form.jsx';
import PhotoGallery from '../Containers/PhotoGallery/photoGallery.js';
import HooksUsage from '../Containers/HooksUsage/Hooks.js';
import Form from './Containers/Calculator/index.module.scss';


export default function() {
  return (
   <ul>
       <li><link to="/">Home!</link></li>
       <li><link to="/Form">Form!</link></li>
       <li><link to="/photoGallery">photoGallery!</link></li>
       <li><link to="/Hooks">HooksUsage!</link></li>
   </ul>
  )
}
