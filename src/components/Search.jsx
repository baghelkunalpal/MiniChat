import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='find a user'/>
      </div>
      <div className='userChat'>
        <img src='https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=300' alt='userinfo'/>
        <div className="userChatInfo">
          <span>Kunal.</span>
        </div>
      </div>
    </div>
  )
}

export default Search