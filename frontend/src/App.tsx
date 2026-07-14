import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import HomePage from './pages/Home'
import SideBar from './components/SideBar'



const AppContent = () => {
  return(


    <Routes>
      <Route path="/" element={<HomePage />} />


      
    </Routes>
  )
}


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <SideBar />

        <div className="flex flex-col md:pl-64">
          <main className="flex-1 p-6">
            <AppContent />
          </main>

        </div>

      </div>
    </BrowserRouter>
  )
}


export default App
