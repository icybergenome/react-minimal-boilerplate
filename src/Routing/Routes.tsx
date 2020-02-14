import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DiceRoller from '../Containers/DiceRoller/DiceRoller';
import ProfileViewer from '../Containers/Profile Viewer/fetchingData';
import ProfileClass from '../Containers/Profile Viewer/profilesMapping';
import Home from '../Containers/Home/Home';

export default function() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/dice-roller">
        <DiceRoller />
      </Route>
      <Route path="/profile-viewer">
        <ProfileViewer />
      </Route>
      <Route path="/profile-class">
        <ProfileClass /> 
       </Route> 
    </Switch>
  );
}
