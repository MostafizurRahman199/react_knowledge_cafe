import React, { useContext } from 'react'
import MyContext from '../utils/Mycontext';

export default function Bookmarks() {


  const {bookmarks, readingTime} = useContext(MyContext);

  return (
    <div className='md:col-span-1 border-2 border-blue-500 p-4 gap-2'>
     
       <div className=' bg-violet-100 rounded-lg  p-4 border-2 border-violet-500 mb-4'>
          <p className='text-violet-500 font-bold'>Spent time on read : {readingTime}</p>
       </div>
       
           <div className=' bg-slate-200 rounded-lg  p-4'>
            <h1 className='text-3xl font-bold text-center '>Bookmarked Blog : {bookmarks.length}</h1>
            {
              bookmarks.map((bookmark, index) =>{
                return <div key={index} className='my-3 px-2 py-4 bg-white font-bold rounded-lg'>
                  {bookmark.title}
                </div>
              })
            }
           </div>

           
     
      </div>
   
  )
}
