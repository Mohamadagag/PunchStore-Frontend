import React from "react";
import DashboardBar from "../Components/DashboardBar";
import "../Css/Dashboard.css";
function Dashboard(props) {
  return (
    <div>
      <DashboardBar />
      <div className="Dashboard--main">{props.elt}</div>
    </div>
  );
}

export default Dashboard;
