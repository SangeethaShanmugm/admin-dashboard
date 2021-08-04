import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function ProfileEdit() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [about, setAbout] = useState("");
  const history = useHistory();
  const { id } = useParams();

  const handleSubmit = () => {
    editProfile(photo, name, email, mobile, about);
  };

  function getProfile() {
    fetch(`https://60c83c35afc88600179f666f.mockapi.io/users/profile/${id}`, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((data) => {
        setName(data.photo);
        setName(data.name);
        setEmail(data.email);
        setMobile(data.mobile);
        setAbout(data.about);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    getProfile();
  }, []);

  function editProfile(photo, name, email, mobile, about) {
    fetch(`https://60c83c35afc88600179f666f.mockapi.io/users/profile/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        photo,
        name,
        email,
        mobile,
        about
      })
    })
      .then((data) => data.json())
      .then((data) => history.push("/Profile"))
      .then((data) => alert("Updated successfully"))
      .catch((e) => console.log(e));
  }

  return (
    <>
      <div className="container">
        <h1>Edit Profile Details</h1>

        <div className="row">
          <div className="col-lg-6">
            <label>Edit Photo</label>
            <input
              type="text"
              name="email"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label>Profile Name</label>
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
        <div className="row">
          <div className="col-lg-6">
            <label>About Info</label>
            <input
              type="text"
              name="mobile"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
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

export default ProfileEdit;
