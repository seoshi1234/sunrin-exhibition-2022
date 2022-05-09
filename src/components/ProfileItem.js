import React from 'react';
import './ProfileItem.css';


function ProfileItem(props) {
  return (
    <div className="profile-item">
      <div className="profile-item__image" style={{'backgroundImage':`url(${props.imageURL})`}}/>
      <p className='profile-item__title'>{props.name}</p>      
    </div>
  );
}

export default ProfileItem;