import React from 'react'
import ProfileItem from '../components/ProfileItem'
import './Profile.css'

function Profile(props) {
  return (
    <div className="profile">      
      <div className="profile__section">
        {
          props.data.map((d,i) =>
            <ProfileItem key={i} imageURL={d.imageURL} name={d.name} />
          )
        }
        {
          props.data.map((d,i) =>
            <ProfileItem key={i} imageURL={d.imageURL} name={d.name} />
          )
        }
        {
          props.data.map((d,i) =>
            <ProfileItem key={i} imageURL={d.imageURL} name={d.name} />
          )
        }
      </div>
    </div>
  )
}

export default Profile