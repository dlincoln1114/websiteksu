import React from 'react'
import { useNavigate } from 'react-router-dom'

function Blog({posts}) {
  const navigate=useNavigate();

  return (
    <div>
      {posts.map((item) => (
        <div key={item.id} >
          <img src={item.coverImage} onClick={() => navigate('blog-detail/'+item.id)}/>
          <h3>{item.tag}</h3>
          <h3>{item.title}</h3>
          <h3>{item.desc}</h3>
        </div>
      ))}
    </div>
  )
}
export default Blog