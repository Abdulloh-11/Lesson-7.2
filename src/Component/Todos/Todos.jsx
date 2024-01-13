import React, { useState } from "react";
import { useEffect } from "react";
const Todos = ({ handleNext, panigation, handlePrev }) => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetchData();
  }, [panigation]);
  const fetchData = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${panigation}&_limit=4`
    ).then(async (response) => {
      const link = response.headers.get("link"); // link to next page (REST)
      const json = await response.json(); // data payload
      console.log(json);
      setTodos(json);
    });
  };
  return (
    <div className="container">
      <h1 className="text-center my-4">Todos</h1>
      <div className="row my-3">
        <div className="col-4 d-flex gap-2">
          <button className="btn btn-info fs-5" onClick={handleNext}>
            &laquo;
          </button>
          <h2 className="w-25 text-center">{panigation}</h2>
          <button className="btn btn-info fs-5" panigation={handlePrev}>
            &raquo;
          </button>
        </div>
      </div>
      <div className="row">
        {
          todos.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="card">
                  <div className="card-header">
                    <h2>№{item.id}</h2>
                  </div>
                  <div className="card-body">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <h3>Completed:</h3>
                    <h3 className={item.completed === true ? "text-success" : "text-danger"}>{String(item.completed)}</h3>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Todos;
