// MyProvider.js
import React, { useState } from 'react';
import MyContext from '../utils/Mycontext'; // Ensure this path is correct

const MyProvider = ({ children }) => {
    const [bookmarks, setBookmarks] = useState([]);
    const [readingTime , setReadingTime] = useState(0);


    // Function to add a blog to bookmarks
    const handleAddtoBookMark = (blog) => {
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    };


    const handleReadingTime = (time)=>{
        setReadingTime((previousTime)=> previousTime + Number(time));
    }

    return (
        <MyContext.Provider value={{ handleAddtoBookMark, bookmarks, readingTime, handleReadingTime }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
