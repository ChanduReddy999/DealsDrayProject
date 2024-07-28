import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CreateEmployee.css';


const CreateEmployee = () => {
    const [employee, setEmployee] = useState({
        f_Image: '',
        f_Name: '',
        f_Email: '',
        f_Mobile: '',
        f_Designation: '',
        f_Gender: '',
        f_Course: [],
        f_CreatedDate: new Date().toISOString().slice(0, 19),
        f_UpdatedDate: new Date().toISOString().slice(0, 19),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleGenderChange = (e) => {
        setEmployee({ ...employee, f_Gender: e.target.value });
    };

    const handleCourseChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setEmployee({ ...employee, f_Course: [...employee.f_Course, value] });
        } else {
            setEmployee({ ...employee, f_Course: employee.f_Course.filter(course => course !== value) });
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setEmployee({ ...employee, f_Image: file.name });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const employeeData = {
                ...employee,
                f_Course: employee.f_Course.join(','), 
            };

            const response = await axios.post('http://localhost:1000/dev/v1/addemployee', employeeData);
            if (response.data.status === 200) {
                alert('Employee added successfully!');
            } else {
                alert('Error adding employee');
            }
        } catch (error) {
            console.error('Error submitting form', error);
            alert('Error adding employee');
        }
    };

    return (
        <>
            <div className='createEmpMain'>
                <Link to='/' className='NavLinkHome'>Home</Link>
                <h1 className='headingCreateEmp'>Create Employee</h1>
                <form onSubmit={handleSubmit} className='formCreateEmp'>
                    <div className='createEmpDiv'>
                        <label className='createEmpDivLabel'>Name</label>
                        <input type='text' name='f_Name' className='inputName' placeholder='Enter Employee Name' value={employee.f_Name} onChange={handleChange} /> <br />
                    </div>
                    <div className='createEmpDiv'>
                        <label className='createEmpDivLabel'>Email</label>
                        <input type='email' name='f_Email' className='inputEmail' placeholder='Enter Employee Email' value={employee.f_Email} onChange={handleChange} /> <br />
                    </div>
                    <div className='createEmpDiv'>
                        <label className='createEmpDivLabel'>Mobile No</label>
                        <input type='tel' name='f_Mobile' className='inputMobile' placeholder='Enter Employee Mobile Number' value={employee.f_Mobile} onChange={handleChange} /> <br />
                    </div>
                    <div className='createEmpDiv'>
                        <label className='createEmpDivLabel'>Designation</label>
                        <select name='f_Designation' value={employee.f_Designation} className='' onChange={handleChange}>
                            <option className='designationOptions' >Select Any Option</option>
                            <option className='designationOptions' value='HR'>HR</option>
                            <option className='designationOptions' value='Manager'>Manager</option>
                            <option className='designationOptions' value='Sales'>Sales</option>
                        </select> <br />
                    </div>
                    <div className='createEmpDiv'>
                        <label className='createEmpDivLabel'>Gender</label>
                        <input type='radio' name='f_Gender' value='Male' className='gender' checked={employee.f_Gender === 'Male'} onChange={handleGenderChange} />
                        <label className='createEmpDivLabel'>Male</label>
                        <input type='radio' name='f_Gender' value='Female' className='gender' checked={employee.f_Gender === 'Female'} onChange={handleGenderChange} />
                        <label className='createEmpDivLabel'>Female</label> <br />
                    </div>
                    <div className='createEmpDiv'>
                        <label className='createEmpDivLabel'>Course</label>
                        <input type='checkbox' name='f_Course' value='MCA' className='courseCheckbox' checked={employee.f_Course.includes('MCA')} onChange={handleCourseChange} />
                        <label className='createEmpDivLabel'>MCA</label>
                        <input type='checkbox' name='f_Course' value='BCA' className='courseCheckbox' checked={employee.f_Course.includes('BCA')} onChange={handleCourseChange} />
                        <label className='createEmpDivLabel'>BCA</label>
                        <input type='checkbox' name='f_Course' value='BSC' className='courseCheckbox' checked={employee.f_Course.includes('BSC')} onChange={handleCourseChange} />
                        <label className='createEmpDivLabel'>BSC</label> <br />
                        <div className='createEmpDiv'>
                            <label className='createEmpDivLabel'>Image URL</label>
                            <input type='file' name='f_Image' onChange={handleFileChange} className='file' /> <br />
                        </div>
                    </div>
                    <div className='createEmpDiv'>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreateEmployee;

