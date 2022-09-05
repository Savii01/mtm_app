import React from 'react'
import './topbar.css'
import {SettingsRounded,NotificationsOutlined,LanguageOutlined} from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

export default function topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className='logo'>MTM</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
             <NotificationsOutlined/>
             <span className='topIconBadge'>2</span>             
          </div>
          <div className="topbarIconContainer">
            <SettingsRounded/>            
          </div>
          <div className="topbarIconContainer">
            <LanguageOutlined/>
             <span className='topIconBadge'>2</span>          
          </div>
          <Avatar className='avatar'/>
        </div>
      </div>
    </div>
  )
}
