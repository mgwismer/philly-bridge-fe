import React from 'react'
import './announcements.scss'

export const Announcements: React.FC = () => {

    return (
    <div className="announcement-container">
      📣 📣 📣 📣 📣 📣 📣 📣 📣 📣 📣
      <h2>ANNOUNCEMENTS</h2>
      <div>
        Congratulations to our latest tournament winners
      </div>
      <div className='announcement-text'>
          <div>JJ and Lori</div>
          <div> Ken and Mark</div>
       </div>

       <div className='announcement-text'>
        🎄☃️🎄☃️🎄☃️🎄☃️🎄☃️🎄☃️🎄
        No game at Panera on December 14. Holiday Party!!
       </div>
    </div>
    )
}