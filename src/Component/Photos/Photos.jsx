import { useEffect, useState } from "react";
import React from "react";


const Photos = ({ handleNext, panigation, handlePrev }) => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetchData();
  }, [panigation]);
  const fetchData = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${panigation}&_limit=10`
    ).then(async (response) => {
      const link = response.headers.get("link"); // link to next page (REST)
      const json = await response.json(); // data payload
      console.log(json);
      setPhotos(json);
    });
  };

  return (
    <div className="container">
      <h1 className="text-center">Photos</h1>
      <div className="row my-3">
        <div className="col-4 d-flex gap-2">
          <button className="btn btn-info fs-5" onClick={handleNext}>
            &laquo;
          </button>
          <h2 className="w-25 text-center">{panigation}</h2>
          <button className="btn btn-info fs-5" onClick={handlePrev}>
            &raquo;
          </button>
        </div>
      </div>
      <div className="col-12 d-flex gap-4 flex-wrap">
        {photos.map((item, index) => {
          return (
            <div key={index} className="card" >
              <img className="w-70" src={item.url} alt={item.id} />
              <div class="card-body">
                <h5 className="card-title">{item.id}</h5>
                <p className="card-text">{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Photos;
