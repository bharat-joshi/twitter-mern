import React from 'react'
import CreatePost from './CreatePost.js';
import Tweet from './Tweet.js';
export default function Feed() {
  return (
    <div>
       <div>
           <CreatePost />
           <Tweet />
       </div>
    </div>
  )
}
