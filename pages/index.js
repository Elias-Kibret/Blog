import Head from 'next/head'
import Category from '../components/Category'
import PostCard from '../components/PostCard'
import PostWidget from '../components/PostWidget'

 const post =[
  {title:'React Testing',excerpt:'Learn React Testing'},
  {title:'React with Taiwind',excerpt:'Learn React with Tailwind'},
 ]
const Home = () => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-200">
      <Head>
        <title>Elias Kibret</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          
        {post.map((post,index)=>(
          <PostCard post={post} key={post.title} />
        
        ))}
        </div>
      <div className='lg:col-span-4 col-span-1'>
           <div className='lg:sticky relative top-8'>
            <PostWidget/>
            <Category/>
           </div>
      </div>
      </div>
    </div>
  )
}

export default Home
