//Important Packages
import React, { useEffect } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

//Importing Components
import HomeComponent from "./Home/components/home";
import LoginComponent from "./Login/components/login";
import SignUpComponent from './Signup/components/signup';
import DashboardComponent from "./School/Dashboard/components/dashboard";
import BoardDashBoard from "./Board/Dashboard/components/dashboard";
import Pending from "./Board/Pending/components/pending";
import Details from "./Board/Details/components/details";
import Schools from "./Board/Schools/components/schools";
import Home from "./School/Home/components/home";
import AddStudents from "./School/AddStudents/components/addStudents";
import SchoolDetails from './Board/SchoolStudent/components/details';
import TenthClass from "./Board/SchoolStudent/components/tenthClass";
import EleventhClass from "./Board/SchoolStudent/components/eleventhClass";
import TwelethClass from "./Board/SchoolStudent/components/tweleth";
import AddResult from "./Board/AddResult/components/addResult";
import TenthClassResult from './Board/AddResult/components/tenthClass';
import EleventhClassResult from "./Board/AddResult/components/eleventhClass";
import TwelethClassResult from "./Board/AddResult/components/tweleth";
import StudentLogin from "./School/StudentLogin/components/studentLogin";
import StudentUserLogin from './Student/Login/components/login';
import Dashboard from "./Student/Dashboard/components/dashboard";
import ReportCard from "./Student/ReportCard/components/reportCard";

const App = () => {

  const updateKey =async () => {
    let role = "Board";
    await fetch("/updateSecureKey", {
      method:"POST",
      headers:{
        'CONTENT-TYPE':'application/json'
      },
      body:JSON.stringify({
        role
      })
    })
    
  }

  setInterval(updateKey, 60000);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/loginPage" element={<LoginComponent />} />
          <Route path="/signup" element={<SignUpComponent />} />
          <Route path="/schoolDashboard" element={<DashboardComponent />} />
          <Route path="/boardDashboard" element={<BoardDashBoard />} />
          <Route path="/pendingApprovals" element={<Pending />} />
          <Route path="/pendingApprovals/institutionDetails" element={<Details />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/schoolHome" element={<Home />} />
          <Route path="/addStudents" element={<AddStudents />} />
          <Route path="/schoolStudentDetails" element={<SchoolDetails />} />
          <Route path="/schoolStudentDetails10thClass" element={<TenthClass />} />
          <Route path="/schoolStudentDetails11thClass" element={<EleventhClass />} />
          <Route path="/schoolStudentDetails12thClass" element={<TwelethClass />} />
          <Route path="/addResult" element={<AddResult />} />
          <Route path="/addResult10thClass" element={<TenthClassResult />} />
          <Route path="/addResult11thClass" element={<EleventhClassResult />} />
          <Route path="/addResult12thClass" element={<TwelethClassResult />} />
          <Route path="/studentsLogin" element={<StudentLogin />} />
          <Route path="/studentUserLogin" element={<StudentUserLogin />} />
          <Route path="/studentLoginCurrent" element={<Dashboard />} />
          <Route path="/reportCard" element={<ReportCard />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
