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
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
       <h3 className='mb-4'>
        {slug?"Related Posts":"Recent Post"}
       </h3>
       {
        relatedPost.map((post)=>(
          <div key={post.title} className="flex  w-full mb-4">
            <div className='flex-none '>
            
              <img 
                 alt={post.title}
                 height="60px"
                 width="60px" 
                 className='object-cover w-[40px] h-[40px] mb-2 rounded-full border-radius-[50%]'   
                 src={post.featuredImage.url}          />
            </div>
            <div className='flex-grow ml-4'>
               <p className='text-gray-500 font-xs'>
                {moment(post.createdAt).format('MMM DD ,YYYY')}
               
               </p>
               <Link href={`/post/${post.slug}`}
               key={post.title}
              >
              <a>{post.title}</a>
              </Link>
            </div>
               
          </div>
        ))
       }
    </div>
  )
}

export default PostWidget