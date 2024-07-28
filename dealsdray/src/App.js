import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/LoginPage/Login';
import DashBoard from './Components/DashBoard/DashBoard';
import CreateEmployee from './Components/CreateEmployee/CreateEmployee';
import EmployeeList from './Components/CreateEmployee/EmployeeList';
import EditEmployee from './Components/CreateEmployee/EditEmployee';


import './App.css';


const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element:<DashBoard />
  },
  {
    path:'/createemployee',
    element:<CreateEmployee />
  },
  {
    path:'/employeelist',
    element:<EmployeeList />
  },
  {
    path:'/editemployee',
    element:<EditEmployee />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
