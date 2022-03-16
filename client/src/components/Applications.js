import React, { useState, useEffect } from "react";

import { getApplications } from "../utils/API";

function Applications() {
  const [applications, setApplications] = useState([]);

  //need to utilize the getApplications function to get the data from the database
  //then set the state to the data
  const getData = () => {
    //this consumes the getApplications function which is a get request to the database and returns the data
    //so that we can set the state to the data we get back from the database  (this is a promise)
    // console.log("getData");

    getApplications()
      .then((res) => {
        setApplications(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    //need to .map the applications array to display the data
    <div>
      <h1>Applications</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Link</th>
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.name}</td>
              <td>{app.description}</td>
              <td>{app.link}</td>
              <td>{app.category}</td>
              <td>{app.image}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Applications;
