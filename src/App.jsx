import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar_ from './component/sidebar/Sidebar_'
import Dashboard_Page from './pages/dashboard_page/Dashboard_Page'
import Home_Page from './pages/home_page/Home_Page'
import ALl_Project_Page from './pages/project/ALl_Project_Page'
import Add_Project_Page from './pages/project/Add_Project_Page'
import Login_Page from './pages/authentication/Login_Page'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar_ />}>
          <Route path="" element={<Home_Page />} />
          <Route path="dashboard" element={<Dashboard_Page/>} />

          <Route path="project/all_project" element={<ALl_Project_Page/>} />
          <Route path="project/add_project" element={<Add_Project_Page/>} />
        
        </Route>
        <Route path="login" element={<Login_Page/>} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
