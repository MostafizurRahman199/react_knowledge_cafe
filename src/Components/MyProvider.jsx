// MyProvider.js
import React, { useState } from 'react';
import MyContext from '../utils/Mycontext'; // Ensure this path is correct

const MyProvider = ({ children }) => {
    const [bookmarks, setBookmarks] = useState([]);
    const [readingTime , setReadingTime] = useState(0);
  


    // Function to add a blog to bookmarks
    const handleAddtoBookMark = (blog) => {

        const check = bookmarks.find((item)=>{
            if(item.id === blog.id){
                return true;
            }
            else{
                return false;
            }
        })

        if(check){
            const afterRemoveFromBookmark = bookmarks.filter((item)=> item.id !== blog.id)
            setBookmarks(afterRemoveFromBookmark);
       
        }else{
            const newBookmarks = [...bookmarks, blog];
            setBookmarks(newBookmarks);
            
          
        }

 };


    const handleReadingTime = (time, id)=>{
        setReadingTime((previousTime)=> previousTime + Number(time));
        const afterRemoveFromBookmark = bookmarks.filter((blog)=> blog.id !== id)
        setBookmarks(afterRemoveFromBookmark);
        
    }

    return (
        <MyContext.Provider value={{ handleAddtoBookMark, bookmarks, readingTime, handleReadingTime, }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
