import React from 'react';
import {  useSelector } from 'react-redux';

export default function() {
  const HomeState = useSelector(state => state.Home);

  return <div>Hello: {HomeState.welcomeText}</div>;
}
