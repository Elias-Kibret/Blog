import React,{useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts,getSimilarPosts } from '../services'
const PostWidget = ({categories ,slug}) => {
  const [relatedPost, setRelatedPosts] = useState([])
  useEffect(() => {
         if(slug)
         {
          getSimilarPosts(categories,slug).then((result)=>setRelatedPost(result))
         }
         else{
          getRecentPosts().then((result)=>setRelatedPosts(result))
         }
  
  }, [slug])
  console.log(relatedPost)
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
       <h3>
        {slug?"Related Posts":"Recent Post"}
       </h3>
       {
        relatedPost.map((post)=>(
          <div key={post.title} className="flex items-center w-full mb-4">
            <div className='flex-none'>
              <img 
                 alt={post.title}
                 height="60px"
                 width="60px" 
                 className='align-middle rounded-full'   
                 src={post.featuredImage.url}          />
            </div>

          </div>
        ))
       }
    </div>
  )
}

export default PostWidget