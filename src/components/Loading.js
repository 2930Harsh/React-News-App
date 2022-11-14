import React, { Component } from 'react'
import loading from '/Users/harshgarg/Desktop/web development/Course practice/10 React/newsapp/src/loading.gif'

const Loading = ()=>{
    return (
      <div className='text-center'>
        <img src={loading} alt="Loading..."></img>
      </div>
    )
}

export default Loading
