import React from "react";
import Card from "./Card";
import Card1 from "./Card1";
import Color from "./Color";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>

        <Link
          to="/Users"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </Link>
      </div>
      <Card1></Card1>
      <div class="row">
        <Card></Card>
        <Footer></Footer>
      </div>
      <div className="row">
        <Color></Color>
      </div>
    </>
  );
}

export default Dashboard;
