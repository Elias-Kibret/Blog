import React ,{useState,useEffect}from 'react'
import Link from 'next/link'
import { getCategorie } from '../services'
const Category = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategorie().then((newCategories)=>setCategories(newCategories))
  }, [])
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
    <h3 className='mb-4'>
        Categories
    </h3>
    {categories.map((category)=>(
      <Link key={category.slug}  href={`/category/${category.slug}`}>
        <span className='cursor-pointer block pb-3 mb-3'>
          {category.name}
        </span>
      </Link>
    ))}
    </div>
  )
}

export default Category