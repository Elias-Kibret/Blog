import React, { useEffect, useState } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services'
const CommentsForm = ({slug}) => {
  const [comment, setComment] = useState([])
  useEffect(()=>{
    getComments(slug).then((result)=>{
      setComment(result)
    })
  },[])
  return (
    <>
    {
      comment.length>0 &&(
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
          <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            {comment.length}
            {" "}
            Comments
          </h3>
          {
            comment.map((comment)=>(
              <div key={comment.createdAt}
                   className="border border-gray-100 mb-4 pb-4"
              >
                <p className='mb-4'>
                   <span className='font-semibold'>{comment.name}</span>
                  {''}
                  on
                  {' '}
                  {moment(comment.createdAt).format('MMM DD , YYYY')}
                </p>
                <p className='whitespace-pre-line text-gray-600'>
                  {parse(comment.comment)}
                </p>

              </div>
            ))
          }

        </div>
      )
    }
            
    </>
  )
}

export default CommentsForm