import React,{useEffect,useState} from 'react'
import Link from 'next/link'
import { getCategorie } from '../services'
const Header = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategorie().then((newCategories)=>setCategories(newCategories))
  }, [])
  console.log(categories)  
  return (
    <header className='container mx-auto px-10 mb-8'>
          <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
                <Link href="/">
                   <span className='cursor-pointer font-bold text-4xl text-white'>
                       Elias Kibret
                   </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
              {/* {
                categories.map((category,index)=>(
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                          {category.name}
                        </span>
                    </Link>
                ))
              } */}
            </div>
          </div>
    </header>
  )
}

export default Header