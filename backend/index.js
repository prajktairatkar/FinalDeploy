const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(bodyparser.json());

//Connect Mysql Databse
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "resourceutilization",
  port: 3306,
});

//Check Databse Connection
db.connect((err) => {
  if (err) {
    console.log("error");
  }
  console.log("Database Connection Successful!!!");
});

//Get ALl Data
app.get("/projectdetails", (req, res) => {
  //   console.log("Get All Users");
  let qrr = `select * from projectdetails`;
  db.query(qrr, (err, results) => {
    if (err) {
      console.log(err, "errors");
    }
    if (results.length > 0) {
      res.send({
        message: "All Project Data",
        data: results,
      });
    }
  });
});

//Get single data
// app.get("/subtask/:id", (req, res) => {
//   let sID = req.param.id;
//   let qrr = `select * from projectdetails`;
//   db.query(qrr, (err, results) => {
//     if (err) {
//       console.log(err, "errors");
//     }
//     if (results.length > 0) {
//       res.send({
//         message: "All Subtask Data",
//         data: results,
//       });
//     }
//   });
// });

//Delete By project id
app.delete("/projectdetails/:id", (req, res) => {
  let qID = req.params.id;

  let qr = `delete from projectdetails where id = ${qID}`;
  let qrr = `ALTER TABLE projectdetails  AUTO_INCREMENT = 1`;

  db.query(qr, (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send({
      message: "data deleted",
    });
  });
  db.query(qrr);
});

//Delete By resource id
app.delete("/resourcedetails/:id", (req, res) => {
  let qID = req.params.id;

  let qr = `delete from resourcedetails where id = ${qID}`;
  let qrr = `ALTER TABLE resourcedetails  AUTO_INCREMENT = 1`;

  db.query(qr, (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send({
      message: "data deleted",
    });
  });
  db.query(qrr);
});

//Delete By project id
app.delete("/subtask/:id", (req, res) => {
  let qID = req.params.id;

  let qr = `delete from subtask where tsk_id = ${qID}`;
  //let qrr = `ALTER TABLE subtask  AUTO_INCREMENT = 1`;

  db.query(qr, (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send({
      message: "data deleted",
    });
  });
  //db.query(qrr);
});

//Post Data
app.post("/projectdetails", (req, res) => {
  let projectName = req.body.projectname;
  let startDate = req.body.startdate;
  let endDate = req.body.enddate;
  let skillsRequired = req.body.skillsrequired;
  let projectManager = req.body.projectmanager;
  let mgLead = req.body.mglead;
  let millennialSpoc = req.body.millennialspoc;
  let Staff = req.body.staff;
  let Millennials = req.body.millennials;
  let Status = req.body.status;
  let projectStatus = req.body.projectstatus;
  let CurrentMillenials = req.body.currentmillenials;
  let ProjectLinks = req.body.Projectlinks;
  let Comments = req.body.comments;
  let Track = req.body.track;
  let SUBBU = req.body.SUBBU;
  let SupplySkill = req.body.Supplyskill;

  let qr = `insert into projectdetails(projectname,start_date,end_date,skills_required,project_manager,mg_lead,millennial_spoc,staff,millennials,status,project_status,current_millenials,Project_links,comments,track,SUB_BU,Supply_skill)
    value('${projectName}','${startDate}','${endDate}','${skillsRequired}','${projectManager}','${mgLead}','${millennialSpoc}','${Staff}','${Millennials}','${Status}','${projectStatus}','${CurrentMillenials}','${ProjectLinks}','${Comments}','${Track}','${SUBBU}','${SupplySkill}')`;
  console.log(qr);
  db.query(qr, (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send({
      message: "Data created Successfully",
      data: results,
    });
  });
});

//delete data
app.delete("/projectdetails/:id", (req, res) => {
  // let qID = req.body.id;
  let qr = `delete from projectdetails`;
  let qrr = `ALTER TABLE projectdetails  AUTO_INCREMENT = 1`;
  db.query(qr, (err, reslt) => {
    if (err) {
      console.log(err);
    }
    res.send({
      message: "New Data is ready to add",
    });
  });
  db.query(qrr);
});

app.delete("/resourcedetails/:id", (req, res) => {
  // let qID = req.body.id;
  let qr = `delete from resourcedetails`;
  let qrr = `ALTER TABLE resourcedetails  AUTO_INCREMENT = 1`;
  db.query(qr, (err, reslt) => {
    if (err) {
      console.log(err);
    }
    res.send({
      message: "New Data is ready to add",
    });
  });
  db.query(qrr);
});

app.get("/resourcedetails", (req, res) => {
  //   console.log("Get All Users");
  let qrr = `select * from resourcedetails`;
  db.query(qrr, (err, results) => {
    if (err) {
      console.log(err, "errors");
    }
    if (results.length > 0) {
      res.send({
        message: "All resource Data",
        data: results,
      });
    }
  });
});

app.post("/resourcedetails", (req, res) => {
  // let projectName = req.body.projectname;
  // let startDate = req.body.startdate;
  // let Duration = req.body.duration;

  let empid = req.body.EmpId;
  let empname = req.body.EmpName;
  let email = req.body.Email;
  let project_name = req.body.ProjectName;
  let project_startdate = req.body.ProjectStartDate;
  let project_enddate = req.body.ProjectEndDate;
  let account_mappedto = req.body.AccountMappedto;
  let capgemini_joiningdate = req.body.Capgeminijoiningdate;
  let mg_joiningdate = req.body.MGJoiningdate;
  let grade = req.body.Grade;
  let mentor = req.body.Mentor;
  let primary_skill = req.body.Primaryskill;
  let secondary_skill = req.body.Secondaryskill;
  let training1 = req.body.Training1;
  let training2 = req.body.Training2;
  let base_location = req.body.BaseLocation;
  let reporting_location = req.body.ReportingLocation;
  let gender = req.body.Gender;
  let asset_using = req.body.Assetusing;
  let phone_num = req.body.phoneno;
  let project_name1 = req.body.ProjectName1;
  let project_startdate1 = req.body.ProjectStartDate1;
  let project_enddate1 = req.body.ProjectEndDate1;
  let project_name2 = req.body.ProjectName2;
  let project_startdate2 = req.body.ProjectStartDate2;
  let project_enddate2 = req.body.ProjectEndDate2;

  let qr = `insert into resourcedetails(EmpId,EmpName,Email,ProjectName,ProjectStartDate,ProjectEndDate,AccountMappedto,Capgeminijoiningdate,MGJoiningdate,Grade,Mentor,Primaryskill,Secondaryskill,Training1,Training2,BaseLocation,ReportingLocation,Gender,Assetusing,phoneno,ProjectName1,ProjectStartDate1,ProjectEndDate1,ProjectName2,ProjectStartDate2,ProjectEndDate2)
    value('${empid}','${empname}','${email}','${project_name}','${project_startdate}','${project_enddate}','${account_mappedto}','${capgemini_joiningdate}','${mg_joiningdate}','${grade}','${mentor}','${primary_skill}','${secondary_skill}','${training1}','${training2}','${base_location}','${reporting_location}','${gender}','${asset_using}','${phone_num}','${project_name1}','${project_startdate1}','${project_enddate1}','${project_name2}','${project_startdate2}','${project_enddate2}')`;
  console.log(qr);
  db.query(qr, (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send({
      message: "Data created Successfully",
      data: results,
    });
  });
});

app.post("/subtask", (req, res) => {
  let projectName = req.body.projectname;
  let taskName = req.body.taskname;
  let startDate = req.body.startdate;
  let Duration = req.body.duration;
  let Progress = req.body.progress;

  let qr = `insert into subtask(tsk_name,tsk_startdate,duration,progress,project_name)
    value('${taskName}','${startDate}','${Duration}','${Progress}','${projectName}')`;
  console.log(qr);
  db.query(qr, (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send({
      message: "Data created Successfully",
      data: results,
    });
  });
});

//Get subtask data
app.get("/subtask/:projectname", (req, res) => {
  //   console.log("Get All Users");
  let gID = req.params.projectname;
  let qrr = `select * from subtask where project_name = '${gID}'`;
  db.query(qrr, (err, result) => {
    if (err) {
      console.log(err, "errors");
    }
    if (result.length > 0) {
      res.send({
        message: "All subtask  Data",
        data: result,
      });
    } else {
      res.send({
        message: "data not found",
      });
    }
  });
});

app.get("/projectdetails/:Email", (req, res) => {
  //   console.log("Get All Users");
  let gID = req.params.Email;

  // let qrr = `select * from subtask where project_name = '${gID}'`;
  let qrr = `select * from projectdetails where staff like '%${gID}%'`;
  db.query(qrr, (err, result) => {
    if (err) {
      console.log(err, "errors");
    }
    if (result.length > 0) {
      res.send({
        message: "All subtask  Data",
        data: result,
      });
    } else {
      res.send({
        message: "data not found",
      });
    }
  });
});

//Update Project Data
app.put("/resourcedetails/:id", (req, res) => {
  console.log(req.body, "updatedata");

  let gID = req.params.id;

  let empid = req.body.EmpId;
  let empname = req.body.EmpName;
  let email = req.body.Email;
  let project_name = req.body.ProjectName;
  let project_startdate = req.body.ProjectStartDate;
  let project_enddate = req.body.ProjectEndDate;
  let account_mappedto = req.body.AccountMappedto;
  let capgemini_joiningdate = req.body.Capgeminijoiningdate;
  let mg_joiningdate = req.body.MGJoiningdate;
  let grade = req.body.Grade;
  let mentor = req.body.Mentor;
  let primary_skill = req.body.Primaryskill;
  let secondary_skill = req.body.Secondaryskill;
  let training1 = req.body.Training1;
  let training2 = req.body.Training2;
  let base_location = req.body.BaseLocation;
  let reporting_location = req.body.ReportingLocation;
  let gender = req.body.Gender;
  let asset_using = req.body.Assetusing;
  let phone_num = req.body.phoneno;
  let project_name1 = req.body.ProjectName1;
  let project_startdate1 = req.body.ProjectStartDate1;
  let project_enddate1 = req.body.ProjectEndDate1;
  let project_name2 = req.body.ProjectName2;
  let project_startdate2 = req.body.ProjectStartDate2;
  let project_enddate2 = req.body.ProjectEndDate2;

  let qr = `update resourcedetails set EmpId = '${empid}',EmpName = '${empname}',Email = '${email}',ProjectName = '${project_name}',ProjectStartDate = '${project_startdate}',ProjectEndDate = '${project_enddate}',AccountMappedto = '${account_mappedto}',Capgeminijoiningdate = '${capgemini_joiningdate}',MGJoiningdate = '${mg_joiningdate}',Grade = '${grade}',Mentor = '${mentor}',Primaryskill = '${primary_skill}',Secondaryskill = '${secondary_skill}',Training1 = '${training1}',Training2 = '${training2}',BaseLocation = '${base_location}',ReportingLocation = '${reporting_location}',Gender = '${gender}',Assetusing = '${asset_using}',phoneno = '${phone_num}',ProjectName1 = '${project_name1}',ProjectStartDate1 = '${project_startdate1}',ProjectEndDate1 = '${project_enddate1}',ProjectName2 = '${project_name2}',ProjectStartDate2 = '${project_startdate2}',ProjectEndDate2 = '${project_enddate2}'
            where id = ${gID}`;
  console.log(qr);
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({
      message: "data updated",
    });
  });
});

// Update Resource Data
app.put("/projectdetails/:id", (req, res) => {
  console.log(req.body, "updatedata");

  let gID = req.params.id;

  let projectName = req.body.projectname;
  let startDate = req.body.startdate;
  let endDate = req.body.enddate;
  let skillsRequired = req.body.skillsrequired;
  let projectManager = req.body.projectmanager;
  let mgLead = req.body.mglead;
  let millennialSpoc = req.body.millennialspoc;
  let Staff = req.body.staff;
  let Millennials = req.body.millennials;
  let Status = req.body.status;
  let projectStatus = req.body.projectstatus;
  let CurrentMillenials = req.body.currentmillenials;
  let ProjectLinks = req.body.Projectlinks;
  let Comments = req.body.comments;
  let Track = req.body.track;
  let SUBBU = req.body.SUBBU;
  let SupplySkill = req.body.Supplyskill;

  let qr = `update projectdetails set projectname = '${projectName}', start_date = '${startDate}', end_date = '${endDate}', skills_required = '${skillsRequired}', project_manager = '${projectManager}', mg_lead = '${mgLead}', millennial_spoc = '${millennialSpoc}', staff = '${Staff}', millennials = '${Millennials}', status = '${Status}', project_status = '${projectStatus}', current_millenials = '${CurrentMillenials}', Project_links = '${ProjectLinks}', comments = '${Comments}', track = '${Track}', SUB_BU = '${SUBBU}', Supply_skill = '${SupplySkill}'
            where id = ${gID}`;
  console.log(qr);
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({
      message: "data updated",
    });
  });
});

//Update Subtask Data
app.put("/subtask/:id", (req, res) => {
  console.log(req.body, "updatedata");

  let gID = req.params.id;

  let projectName = req.body.projectname;
  let taskName = req.body.taskname;
  let startDate = req.body.startdate;
  let Duration = req.body.duration;
  let Progress = req.body.progress;

  let qr = `update subtask set tsk_name = '${taskName}', tsk_startdate = '${startDate}', duration = '${Duration}', progress = '${Progress}', project_name = '${projectName}'
            where tsk_id = ${gID}`;
  console.log(qr);
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({
      message: "data updated",
    });
  });
});

// Delete Data By ID

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on 3000 PORT');
});
