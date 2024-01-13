import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Albums from './Component/Albums/Albums';
import Comments from './Component/Comments/Comments';
import Nav from './Component/Navbar/Nav';
import Photos from './Component/Photos/Photos';
import Posts from './Component/Posts/Posts';
import Products from './Component/Shop/Shop';
import Singlepage from './Component/SinglePage/Singlepage';
import Todos from './Component/Todos/Todos';
import Users from './Component/Users/Users';

export default function App() {

  const [panigation, setPanigation] = useState(1);
  const handleNext = () => {
    setPanigation((prev) => prev - 1);
  };
  const handlePrev = () => {
    setPanigation((prev) => prev + 1);
  };

  return (
    <div className='container-fluid'>
      <div className=" d-flex ">
        <div>
          <Nav setPanigation={setPanigation} />
        </div>
        <div className='list_tab'>
          <Routes>
            <Route path='/home/:id' element={<Singlepage />} />
            <Route path="" element={<Users panigation={panigation} setPanigation={setPanigation} handleNext={handleNext} handlePrev={handlePrev} />} />
            <Route path="photos" element={<Photos panigation={panigation} setPanigation={setPanigation} handleNext={handleNext} handlePrev={handlePrev} />} />
            <Route path="posts" element={<Posts panigation={panigation} setPanigation={setPanigation} handleNext={handleNext} handlePrev={handlePrev} />} />
            <Route path="comments" element={<Comments panigation={panigation} setPanigation={setPanigation} handleNext={handleNext} handlePrev={handlePrev} />} />
            <Route path="todos" element={<Todos panigation={panigation} setPanigation={setPanigation} handleNext={handleNext} handlePrev={handlePrev} />} />
            <Route path="albums" element={<Albums panigation={panigation} setPanigation={setPanigation} handleNext={handleNext} handlePrev={handlePrev} />} />
            <Route path="product" element={<Products />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
