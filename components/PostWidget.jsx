import React,{useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/l'
import { getRecentPosts } from '../services'
const PostWidget = ({categories ,slug}) => {
  const [relatedPost, setRelatedPost] = useState([])
  useEffect(() => {
         if(slug)
         {
          getSimilarPosts(category,slug).then((result)=>setRelatedPost(result))
         }
         else{
          getRecentPosts(category,slug).then((result)=>setRelatedPosts(result))
         }
  
  }, [third])
  
  return (
    <div>

    </div>
  )
}

export default PostWidget