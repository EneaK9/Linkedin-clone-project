import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
 

function Sidebar() {
  const user = useSelector(selectUser);

     const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
     )

  return (
    <div className='sidebar'>
         <div className='sidebar_top'>
           <img src='https://images.unsplash.com/photo-1550025899-5f8a06b1b3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTIlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60' alt=''></img> 
           <Avatar src={user.photoUrl} className='sidebar_avatar'> {user.email[0]}</Avatar>
           <h2>{user.displayName}</h2>
           <h4>{user.email}</h4>
         </div>
         <div className='sidebar_stats'>
            <div className='sidebar_stat'>
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>2,573</p>
            </div>
            <div className='sidebar_stat'>
                <p>Views on post</p>
                <p className='sidebar_statNumber'>2,444</p>
            </div>
         </div>

            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>

    </div>
  )
}

export default Sidebar