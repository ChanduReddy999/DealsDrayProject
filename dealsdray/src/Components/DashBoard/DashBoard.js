import React from 'react'
import { Link } from 'react-router-dom'
import './DashBoard.css'

const DashBoard = () => {
    return (
        <>
            <Link to='/createemployee' className='NavigateLinks'>CreateEmployee</Link>
            <Link to='/employeeList' className='NavigateLinks'>EmployeeList</Link>
            <Link to='/editemployee' className='NavigateLinks'>EditEmployee</Link>
            <Link to='/login' className='NavigateLinks'>Logout</Link>
            <h1 className='WelcomePage'>Welcome to Admin Panel</h1>
        </>
    )
}

export default DashBoard
