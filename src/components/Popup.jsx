import React from 'react'
import '../components/popup.css'

function Popup(data) {
    console.log(data.firstName);
    
  return (
    <div className='popup'>
      {
        `Firstname :  ${data.firstName}`
      }
    </div>
  )
}

export default Popup
