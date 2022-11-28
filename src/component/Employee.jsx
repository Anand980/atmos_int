import React, { useState } from "react";
import EmployeeList from "./EmployeeList";
import { useNavigate } from "react-router-dom";

const Employee = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState(null);
  const [desgination, setDesignation] = useState("");
  const [experience, setExperience] = useState(null);
  const [pic, setPic] = useState("");
  const [formdata, setFormData] = useState([]);
  // let navigate = useNavigate();

  const handlesubmit = (e) => {
    setFormData([fname, lname, dob, desgination, experience, pic]);
    //  navigate("/employeelist", { state: formdata });
  };

  return (
    <div>
      <div>
        <label>First Name</label>
        <input type="text" onChange={(e) => setFname(e.target.value)} />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" onChange={(e) => setLname(e.target.value)} />
      </div>
      <div>
        <label>DOB</label>
        <input type="date" onChange={(e) => setDob(e.target.value)} />
      </div>
      <div>
        <label>Designation</label>
        <input type="text" onChange={(e) => setDesignation(e.target.value)} />
      </div>
      <div>
        <label>Experience</label>
        <input type="number" onChange={(e) => setExperience(e.target.value)} />
      </div>
      <div>
        <label>Select Profile Pic</label>
        <input type="file" onChange={(e) => setPic(e.target.value)} />
      </div>
      <br />
      <button onClick={(e) => handlesubmit(e)}>Submit</button>
      <br />
      <EmployeeList data={formdata} />
    </div>
  );
};

export default Employee;
