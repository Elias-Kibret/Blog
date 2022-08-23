import { get } from 'https'
import React ,{useEffect,useState} from 'react'
import { getFeaturedPost } from '../services'
import Link from 'next/link'
const FeaturedPost = () => {
const [featuredPosts, setFeaturedPosts] = useState([])
     useEffect(()=>{
getFeaturedPost().then((result)=>{
    setFeaturedPosts(result)
})
     },[])
    console.log(featuredPosts)
  return (
    <div className=' flex  flex-wrap mb-8'>
        {
            featuredPosts.map((items)=>(
                 <Link href={`post/${items.slug}`}>
                 
                <div className='max-w-250px border border-gray-100 rounded-lg mx-4 h-150px relative object-contain'>
                    <img
                       src={items.featuredImage.url}
                       width="250px"
                       height="150px"
                       className='rounded-lg shadow-lg'
                       />   

                       <div className=' px-3 py-5 bg-black absolute top-50 bottom-0 right-0 left-0 bg-opacity-40 h-100px '>
                        <div className='flex items-center'>

                             <img 
                             src={items.author.photo.url}
                             width="34px"
                             height="34px"
                             className='rounded-full'
                             />
                             <div>

                             </div>
                             <h1 className='text-white ml-3  font-semibold'>{items.author.name}</h1>
                        </div>
                             <h2 className='text-white ml-3 text-sm mt-1'>{items.title}</h2>
                        </div>                
                </div>
                 </Link>
            ))
        }
    </div>
  )
}





export default FeaturedPost