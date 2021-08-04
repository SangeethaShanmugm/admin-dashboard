import React, { useState } from "react";

import { useHistory } from "react-router-dom";
function Usercreate() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  let history = useHistory();

  const handleSubmit = () => {
    createUser(name, email, mobile);
  };
  function createUser(name, email, mobile) {
    fetch("https://60c83c35afc88600179f666f.mockapi.io/users/users", {
      method: "POST",
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
      .then((data) => {
        history.push("/users");
        alert("User successfully added !");
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="container">
      <h1>User Form</h1>

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
          <input
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default Usercreate;
