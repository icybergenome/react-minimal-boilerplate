import React, { useState, useEffect } from 'react';

export default function singleUsedata(props) {
  const {
    match: { params },
  } = props;
  const [getUserData, setGetUserData] = useState([]);

  // console.log('!!!', params);

  useEffect(() => {
    fetch(`https://crud-customers-app.herokuapp.com/customers/${params.id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())

      .then(userdata => setGetUserData(userdata));
  }, []);

  return (
    <div>
      <h1>Name :</h1> {getUserData.name}
      <h1>Email :</h1> {getUserData.email};<h1>Active :</h1>
      {getUserData.active}
      <h1>Picture</h1> <img alt="Profile Pic" src={getUserData.profilePic} />
    </div>
  );
}
