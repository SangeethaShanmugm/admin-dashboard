import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function Users() {
  const history = useHistory();
  const [users, setUsers] = useState([]);

  function getUser() {
    fetch("https://60c83c35afc88600179f666f.mockapi.io/users/users", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((data) => setUsers(data))
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    getUser();
  }, []);

  function editUser(id) {
    history.push(`/UserEdit/${id}`);
  }

  function deleteUser(id) {
    setUsers([]); // given for deletion ->  Loading... content to display
    fetch(`https://60c83c35afc88600179f666f.mockapi.io/users/users/${id}`, {
      method: "DELETE"
    })
      .then((data) => data.json()) // inside 'then' means it is delete sucessfully
      .then((data) => alert("Deleted successfully"))
      .then((data) => getUser())
      .catch((e) => console.log(e));
  }

  function editUser(id) {
    history.push(`/UserEdit/${id}`);
  }

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">List of Users</h1>
        <Link
          to="/UserCreate"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </div>

      <div className="card shadow mb-4"></div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((data) => {
                return (
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.mobile}</td>
                    <td>
                      <Button onClick={() => editUser(data.id)} color="primary">
                        Edit
                      </Button>
                      <Button
                        onClick={() => deleteUser(data.id)}
                        color="secondary"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
