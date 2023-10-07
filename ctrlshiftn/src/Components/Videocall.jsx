import React from 'react'
import user_img from "../assets/user_img.jpg"
import "../Styles/Videocall.css"
import Message from './Message'

const Videocall = () => {
  return (
    <div id='videocall_container'>
      <div id='user1'>
        <img src={user_img} alt="" id='user_img'/>
        <img src={user_img} alt="" id='user_img'/>
      <button>Send Stream</button>
      <button>Call</button>
      <Message />
      </div>
    </div>
  )
}

export default Videocall
