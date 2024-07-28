import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditEmployee = ({ id }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        designation: '',
        gender: '',
        courses: {
            MCA: false,
            BCA: false,
            BSC: false,
        },
        image: null,
    });

    useEffect(() => {
        axios.get(`http://localhost:1000/dev/v1/getemployeedetailsbyid`)
            .then(response => {
                const { name, email, mobile, designation, gender, courses } = response.data;
                setFormData({ ...formData, name, email, mobile, designation, gender, courses });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                courses: {
                    ...formData.courses,
                    [name]: checked,
                },
            });
        } else if (type === 'file') {
            setFormData({
                ...formData,
                image: e.target.files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('mobile', formData.mobile);
        formDataToSend.append('designation', formData.designation);
        formDataToSend.append('gender', formData.gender);
        formDataToSend.append('courses', JSON.stringify(formData.courses));
        if (formData.image) {
            formDataToSend.append('image', formData.image);
        }

        axios.put(`http://localhost:1000/dev/v1/editemployeedetails`, formDataToSend)
            .then(response => {
                console.log('Data updated:', response.data);
            })
            .catch(error => {
                console.error('Error updating data:', error);
            });
    };

    return (
        <div className='EditEmpMain'>
            <h1 className='EditEmpHeading'>Update Employee Details</h1>
            <form onSubmit={handleSubmit} className='EditEmpForm'>
                <label className='EditEmpFormLabel'>Name</label>
                <input type='text' name='name' value={formData.name} className='EditEmpFormInput' placeholder='Enter Employee Name' onChange={handleChange} /> <br />
                <label className='EditEmpFormLabel'>Email</label>
                <input type='email' name='email' value={formData.email} className='EditEmpFormInput' placeholder='Enter Employee Email' onChange={handleChange} /> <br />
                <label className='EditEmpFormLabel'>Mobile No</label>
                <input type='tel' name='mobile' value={formData.mobile} className='EditEmpFormInput' placeholder='Enter Employee Mobile Number' onChange={handleChange} /> <br />
                <label className='EditEmpFormLabel'>Designation</label>
                <select name='designation' value={formData.designation} className='EditEmpFormSelect' onChange={handleChange}>
                    <option className=''>Select Your Designation</option>
                    <option value='HR' className=''>HR</option>
                    <option value='Manager' className=''>Manager</option>
                    <option value='Sales' className=''>Sales</option>
                </select> <br />
                <label className='EditEmpFormLabel'>Gender</label>
                <input type='radio' name='gender' value='Male' className='' checked={formData.gender === 'Male'} onChange={handleChange} />
                <label className='EditEmpFormLabel'>Male</label>
                <input type='radio' name='gender' value='Female' className='' checked={formData.gender === 'Female'} onChange={handleChange} />
                <label className='EditEmpFormLabel'>Female</label> <br />
                <label className='EditEmpFormLabel'>Course</label>
                <label className='EditEmpFormLabel'>MCA</label>
                <input type='checkbox' name='MCA' className='' checked={formData.courses.MCA} onChange={handleChange} />
                <label className='EditEmpFormLabel'>BCA</label>
                <input type='checkbox' name='BCA' className='' checked={formData.courses.BCA} onChange={handleChange} />
                <label className='EditEmpFormLabel'>BSC</label>
                <input type='checkbox' name='BSC' className='' checked={formData.courses.BSC} onChange={handleChange} /> <br />
                <label className='EditEmpFormLabel'>Img Upload</label>
                <input type='file' name='image' className='' onChange={handleChange} /> <br />
                <button type='submit' className=''>Update</button>
            </form>
        </div>
    );
};

export default EditEmployee;
