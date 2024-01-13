import React, { useState } from "react";
import { useEffect } from "react";
const Comments = ({ handleNext, panigation, handlePrev }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchData();
  }, [panigation]);
  const fetchData = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${panigation}&_limit=4`
    ).then(async (response) => {
      const link = response.headers.get("link"); // link to next page (REST)
      const json = await response.json(); // data payload
      console.log(json);
      setComments(json);
    });
  };
  return (
    <div className="container">
        <h1 className="text-center my-4">Comments</h1>
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
        {comments.map((item, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card">
                <div className="card-header">
                  <h3>{item.name}</h3>
                </div>
                <div className="card-body">
                  <p>{item.body}</p>
                </div>
                <div className="card-footer">
                  <h5>{item.email}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
