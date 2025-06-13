import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext.jsx';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard.jsx';
import Appointments from './pages/Admin/Appointments.jsx';
import AddDoctor from './pages/Admin/AddDoctor.jsx';
import DocotrsList from './pages/Admin/DocotrsList.jsx';


function App() {
  const {aToken} = useContext(AdminContext)

  return aToken ? (
    <div className='bg-[#f8f9fd]'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard/>} />
          <Route path='/all-appointments' element={<Appointments/>} />
          <Route path='/add-doctor' element={<AddDoctor/>} />
          <Route path='/doctor-list' element={<DocotrsList/>} />
        </Routes>
      </div>
    </div>
  ) :(
    <>
      <Login />
      <ToastContainer/>
    </>
  )
}

export default App