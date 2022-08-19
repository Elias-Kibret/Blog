import React,{useContext} from 'react'
import Link from 'next/link'
const Header = () => {
    const categorys=[
        {name:'React',slug:'react'},
        {name:'Web Development',slug:'web-dev'}
    ]
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
              {
                categorys.map((categorys,index)=>(
                    <Link key={categorys.slug} href={`/category/${categorys.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                          {categorys.name}
                        </span>
                    </Link>
                ))
              }
            </div>
          </div>
    </header>
  )
}

export default Header