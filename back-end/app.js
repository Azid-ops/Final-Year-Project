const express = require("express");

const mongoose = require("mongoose");
const app = express();

const UploadData = require("./Routers/Signup/signup");

const LoginData = require('./Routers/Signin/login');

const SecureKey = require('./Routers/Updating/secureKey');

const Approve = require('./Routers/Approve/approve');

const GetApprovals = require("./Routers/Approve/getApprovals");

const ApproveInstitution = require("./Routers/Approve/approveInstitution");

const DeleteInstitution = require("./Routers/Approve/deleteApproval");

const GetRegisteredSchools = require("./Routers/Schools/schools");

const AddStudents = require("./Routers/AddStudents/addStudents");

const NinthClass = require("./Routers/NinthClass/ninthClass");

const BoardRollNumber = require("./Routers/Board/registerRollNumber");

const GetStudentData = require("./Routers/StudentData/getStudentData");

const ResultData = require("./Routers/Result/result");

const RegisterStudents = require("./Routers/RegisterStudents/students");

const RegisterStudentLogin = require("./Routers/Student/student");

const CurrentStudentResult = require("./Routers/Student/studentResult");

app.use(express.json());

app.use("/", (req,res,next) => {
    console.log("Node.js server is up and running");
    next();
});

app.use(UploadData);

app.use(LoginData);

app.use(SecureKey);

app.use(Approve);

app.use(GetApprovals);

app.use(ApproveInstitution);

app.use(DeleteInstitution);

app.use(GetRegisteredSchools);

app.use(AddStudents);

app.use(NinthClass);

app.use(BoardRollNumber);

app.use(GetStudentData);

app.use(ResultData);

app.use(RegisterStudents);

app.use(RegisterStudentLogin);

app.use(CurrentStudentResult);

mongoose.connect("mongodb+srv://Mahad:Mahad@cluster0.btoqm.mongodb.net/BISE").then(()=>{
    app.listen(5000);
}).catch(err=>{
    console.log(err);
});
