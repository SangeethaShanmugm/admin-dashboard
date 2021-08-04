import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function UserEdit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const history = useHistory();
  const { id } = useParams();

  const handleSubmit = () => {
    editUser(name, email, mobile);
  };

  function getUser() {
    fetch(`https://60c83c35afc88600179f666f.mockapi.io/users/users/${id}`, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
        setMobile(data.mobile);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    getUser();
  }, []);

  function editUser(name, email, mobile) {
    fetch(`https://60c83c35afc88600179f666f.mockapi.io/users/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        mobile
      })
    })
      .then((data) => data.json())
      .then((data) => history.push("/users"))
      .then((data) => alert("Updated successfully"))
      .catch((e) => console.log(e));
  }

  return (
    <>
      <div className="container">
        <h1>Edit User Form</h1>

        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label>Mobile</label>
            <input
              type="text"
              name="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <label style={{ align: "center" }}></label>
            <input
              className="btn btn-primary"
              type="submit"
              value="Update"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserEdit;
