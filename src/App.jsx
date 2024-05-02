import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar_ from './component/sidebar/Sidebar_'
import Dashboard_Page from './pages/dashboard_page/Dashboard_Page'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar_ />}>
          <Route path="dashboard" element={<Dashboard_Page/>} />
        
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
