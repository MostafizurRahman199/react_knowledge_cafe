import React, { useContext } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MyContext from '../utils/Mycontext';




export default function Blog({blog}) {

const {cover_img, title, author, author_img, posted_date, reading_time, hash_tags, description} = blog;
const {handleAddtoBookMark,  handleReadingTime} = useContext(MyContext);
  return (
    <div className='p-4 flex flex-col gap-4'>
       <div>
        <img className='w-full object-cover rounded-lg' src={cover_img} alt={title} />
       </div>
       <div className='flex justify-between items-center'>
            <div className='flex items-center gap-1'>
                <div>
                  <img className='w-10 h-10  rounded-full object-cover' src={author_img} alt="" />
                </div>
                <div>
                  <h3 className='font-bold text-lg'>{author}</h3>
                  <p className='text-base text-gray-400'>{posted_date}</p>
                </div>
            </div>

            <div className='flex items-center gap-1'>
                <p className='text-base text-gray-400'>{reading_time} min read</p>
                <button onClick={()=>handleAddtoBookMark(blog)} className='btn bg-transparent shadow-none border-none'><BookmarkBorderIcon/></button>
            </div>
       </div>
       <h1 className='text-4xl font-bold'>{title}</h1>
       <div className='flex gap-2'>
       {
        hash_tags.map((tag, index) => {
          return (
            <a className="text-base text-gray-400" key={index} >{tag}</a>
            )
            })

       }
       </div>

       <div>
        <p className='text-base'>{description}</p>
       </div>
       <div>
        <button onClick={()=>handleReadingTime(reading_time)} className='btn'>Mark as Read</button>
       </div>
       <div className="divider"></div>
    </div>
  )
}
