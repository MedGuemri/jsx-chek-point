import React from 'react'
import me from "../images/me.jpg"

function ProfilePhoto() {
  return (
    <div>
        <img src={me} alt="My profile" />
    </div>
  )
}

export default ProfilePhoto