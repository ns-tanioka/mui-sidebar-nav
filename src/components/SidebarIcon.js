import Icon from '../images/icon.png'
import React from 'react'

function SidebarIcon() {
  return (
    <div className='SidebarIcon'>
      <img src={Icon} />
      <p>Sidebar_nav@gmail.com</p>
    </div>
  )
}

/*
imgは絶対パス相対パスだと表示されない
*/

export default SidebarIcon
