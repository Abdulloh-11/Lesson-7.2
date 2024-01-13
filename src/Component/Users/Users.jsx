import React, { useEffect, useState } from "react";

const Users = ({ handleNext, panigation, handlePrev }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, [panigation]);
  const fetchData = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/users?_page=${panigation}&_limit=5`
    ).then(async (response) => {
      const link = response.headers.get("link"); // link to next page (REST)
      const json = await response.json(); // data payload
      console.log(json);
      setUsers(json);
    });
  };
  return (
    <div className="container">
      <h1 className="text-center my-4">Users</h1>
      <div className="row">
        <div className="col-12 ">
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
            <div className="col-12">
              <table className="table table-bordered table-hover table-striped">
                <thead>
                  <tr>
                    <th>T/R</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Phone</th>
                    <th>Address (city)</th>
                    <th>Website</th>
                    <th>Company (name)</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.phone}</td>
                        <td>{item.address.city}</td>
                        <td>{item.website}</td>
                        <td>{item.company.name}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
