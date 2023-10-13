import React, { useState } from 'react';

function DepartmentForm() {
  const [formData, setFormData] = useState({
    departmentName: '',
    departmentType: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveDataToFile(formData);
    setFormData({
      departmentName: '',
      departmentType: '',
    });
  };

  const saveDataToFile = (data) => {
    const textToWrite = JSON.stringify(data);
    const blob = new Blob([textToWrite], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'department_data.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h2>Department Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="departmentName">Department Name:</label>
          <input
            type="text"
            id="departmentName"
            name="departmentName"
            value={formData.departmentName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="departmentType">Department Type:</label>
          <input
            type="text"
            id="departmentType"
            name="departmentType"
            value={formData.departmentType}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DepartmentForm;
