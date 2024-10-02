import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useNavigate, Outlet } from 'react-router-dom'
function App() {
  const navigate = useNavigate();
  function handleSearch(event){
      event.preventDefault();
      let inputVal = event.target[0].value;
      // console.log(inputVal);
      navigate(`/search/${inputVal}`)
      document.querySelector('.sidebar').classList.remove('active')
  }
  return (
    <>
      <Navbar handleSearch={handleSearch}/>
      <div className="container-fluid px-0">
        <div className="row justify-content-center mx-0">
            <Sidebar handleSearch={handleSearch}/>
            {/* {content === "main" && <MainContent/>}
            {content === "about" && <AboutContent/>} */}
            <Outlet/>
        </div>
      </div>
    </>
  )
}

export default App
