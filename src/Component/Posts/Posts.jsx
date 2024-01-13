import React, { useState } from "react";
import { useEffect } from "react";

const Posts = ({ handleNext, panigation, handlePrev}) => {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData();
  }, [panigation]);

  const fetchData = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${panigation}&_limit=4`
    ).then(async (response) => {
      const link = response.headers.get("link"); // link to next page (REST)
      const json = await response.json(); // data payload
      console.log(json[0].title);
      setPosts(json);
    });
  };
  
  return (
    <div className="container">
        <h1 className="text-center my-4">Posts</h1>
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
      <div className="row">
        {posts.map((item, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card">
                <div className="card-header">
                  <h4>{item.title}</h4>
                </div>
                <div className="card-body">
                  <p>{item.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
