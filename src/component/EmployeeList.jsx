import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const EmployeeList = ({ data }) => {
  console.log(data);
  const [empDetails, setEmpDetails] = useState([]);
  useEffect(() => {
    const customdata = [
      {
        fname: data[0],
        lname: data[1],
        dob: data[2],
        designation: data[3],
        experience: data[4]
      }
    ];
    setEmpDetails(customdata);
    console.log("cus", customdata);
  }, [data]);

  const handleAdd = () => {};

  const handleDelete = () => {
    window.confirm("Do you want to Delete");
    setEmpDetails([]);
  };

  const columnsCustom = [
    { name: "First Name", selector: (row) => row.fname },
    { name: "Last Name", selector: (row) => row.lname },
    { name: "DOB", selector: (row) => row.dob },
    { name: "Designation", selector: (row) => row.designation },
    { name: "Experience", selector: (row) => row.experience },
    {
      button: true,
      name: "Add",
      cell: (row) => (
        <>
          <label>➕</label>
        </>
      )
    },
    {
      button: true,
      name: "Edit",
      cell: (row) => (
        <>
          <label>✍</label>
        </>
      )
    },
    {
      button: true,
      name: "Delete",
      cell: (row) => (
        <>
          <span onClick={() => handleDelete()}>❌</span>
        </>
      )
    }
  ];
  return (
    <div>
      <h2>Employee List:</h2>
      <DataTable
        columns={columnsCustom}
        data={empDetails}
        // progressPending={pending}
        defaultSortFieldId={2}
        pagination
      />
    </div>
  );
};

export default EmployeeList;
