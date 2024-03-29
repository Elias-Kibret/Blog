import React from 'react'
import {getPost,getPostDetails} from '../../services'
import {PostDetail,Category,PostWidget,Author,Comments,CommentsForm} from '../../components'
const PostDetails = ({post}) => {
  return (
    <div className='container mx-auto px-10'>
         <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='col-span-1 lg:col-span-8'>
            <PostDetail post={post}/>
            <Author author={post?.author}/>
            <Comments slug={post?.slug}/> 
            <CommentsForm slug={post?.slug}/>     
            </div>
            <div className='col-span-1 lg:col-span-4'>
                <div className='relative lg:sticky top-8'>
                    <PostWidget  slug={post?.slug} categories={post?.categories.map((category) => category?.slug)}/>
                    <Category/>
                    </div>  
            </div>
           
         </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths(){
  const post=await getPost()

  return  {
    paths:post.map(({node:{slug}})=>({params:{slug}})),
    fallback:false
  }
}