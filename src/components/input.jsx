import React from 'react'
import Img from '../img/img.png'
import Attact from '../img/attach.png'

const input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type something...' />
      <div className="send">
        <img src={Attact } alt="" />
        <input type='file' style={{display:"none"}} id='file'/>
        <label htmlFor='file'>
          <img src={Img} alt=''/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default input