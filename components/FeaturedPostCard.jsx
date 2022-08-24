import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
<div className=' mb-8'>
<Link href={`post/${post.slug}`}>
                 
                 <div className='overflow-hidden max-w-[270px] border border-gray-100 rounded-lg mx-4 h-[150px] relative object-cover'>
                     <img
                        src={post.featuredImage.url}
                        width="250px"
                        height="170px"
                        className='rounded-lg shadow-lg overflow-hidden object-cover'
                        />   
             
                        <div className=' px-3 py-5 bg-black absolute htop-50 bottom-0 right-0 left-0 bg-opacity-40 max-h-[100px} '>
                         <div className='flex items-center'>
             
                              <img 
                              src={post.author.photo.url}
                              width="34px"
                              height="34px"
                              className='rounded-full'
                              />
                              <div>
             
                              </div>
                              <h1 className='text-white ml-3  font-semibold'>{post.author.name}</h1>
                         </div>
                              <h2 className='text-white ml-3 text-sm mt-1'>{post.title}</h2>
                         </div>                
                 </div>
                  </Link>

  </div>
);

export default FeaturedPostCard;