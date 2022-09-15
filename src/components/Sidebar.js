import React from 'react'
import {SidebarData} from "./SidebarData"
import SidebarIcon from "./SidebarIcon"

function Sidebar() {
  return (
    <div className='Sidebar'>
      <SidebarIcon />
      <ul className='SidebarList'>
        {SidebarData.map((value, key) => {
            return(
                <li 
                  key={key} 
                  id={window.location.pathname == value.link ? "active" : ""}
                  /*window.location.pathnameがvalue.linkと等しければ、"active" のidを指定、そうでなければ(:)空のidを指定*/
                  className="row" 
                  onClick={()=>{
                    window.location.pathname = value.link /*SidebarDataで作ったlinkがwindowの検索バーに入る*/
                }}>
                    <div id="icon">{value.icon}</div>
                    <div id="title">{value.title}</div>
                </li>
            )
        })}
      </ul>
    </div>
  );
}

export default Sidebar
