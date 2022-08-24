import Head from 'next/head'
import {FeaturedPosts} from '../sections/index'

import Category from '../components/Category'
import PostCard from '../components/PostCard'
import PostWidget from '../components/PostWidget'
import {getPost} from '../services'
import { getFeaturedPost } from '../services'
 const post =[
  {title:'React Testing',excerpt:'Learn React Testing'},
  {title:'React with Taiwind',excerpt:'Learn React with Tailwind'},
 ]
const Home = ({posts}) => {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>Elias Kibret</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts/>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          
        {posts.map((post,index)=>(
          <PostCard post={post.node} key={post.title} />
        
        ))}
        </div>
      <div className='lg:col-span-4 col-span-1'>
           <div className='lg:sticky relative top-8'>
            <PostWidget categories={post.categories} slug={post.slug}/>
            <Category/>
           </div>
      </div>
      </div>
    </div>
  )
}

export async function getStaticProps()
{
  const posts=(await getPost() || [])
  return {
    props:{posts}
  }
}
export default Home
