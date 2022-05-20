import React from 'react'
import ProfileItem from '../components/ProfileItem'
import './Profile.css'
import { useEffect } from 'react'

function Profile(props) {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <div className="profile">      
      <div className="profile__section">
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