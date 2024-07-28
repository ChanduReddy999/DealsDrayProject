import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './EmployeeList.css'


const EmployeeList = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        empDataFunc()
    },[])

    const empDataFunc =async()=>{
        try {
                await axios.get('http://localhost:1000/dev/v1/getemployeedetails').then(response => {
                    const newData = response.data
                    setData(newData.data)
                })
                .catch(console.log("error"))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Link to='/' className='NavLinkHome'>Home</Link>
            <div className='EmployeeListMain'>
                <table className='EmployeeListTable'>
                    <thead className='EmployeeListTableHead'>
                        <tr className='EmployeeListTableRow'>
                            <th className='EmployeeListTableHeadings'>f_Id</th>
                            <th className='EmployeeListTableHeadings'>f_Image</th>
                            <th className='EmployeeListTableHeadings'>f_Name</th>
                            <th className='EmployeeListTableHeadings'>f_Email</th>
                            <th className='EmployeeListTableHeadings'>f_Mobile</th>
                            <th className='EmployeeListTableHeadings'>f_Designation</th>
                            <th className='EmployeeListTableHeadings'>f_Gender</th>
                            <th className='EmployeeListTableHeadings'>f_Course</th>
                            <th className='EmployeeListTableHeadings'>f_CreatedDate</th>
                            <th className='EmployeeListTableHeadings'>f_UpdatedDate</th>
                        </tr>
                    </thead>
                    <tbody className='EmployeeListTableBody'>
                        {
                            data.map((emp,index)=>{
                                return(
                                 <tr key={index} className='EmployeeListTableRow'>
                                    <td className='EmployeeListTableData'>{emp.f_Id}</td>
                                    <td className='EmployeeListTableData'>{emp.f_Image}</td>
                                    <td className='EmployeeListTableData'>{emp.f_Name}</td>
                                    <td className='EmployeeListTableData'>{emp.f_Email}</td>
                                    <td className='EmployeeListTableData'>{emp.f_Mobile}</td>
                                    <td className='EmployeeListTableData'>{emp.f_Designation}</td>
                                    <td className='EmployeeListTableData'>{emp.f_Gender}</td>
                                    <td className='EmployeeListTableData'>{emp.f_Course}</td>
                                    <td className='EmployeeListTableData'>{emp.f_CreatedDate}</td>
                                    <td className='EmployeeListTableData'>{emp.f_UpdatedDate}</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EmployeeList
