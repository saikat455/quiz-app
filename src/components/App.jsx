import { useState } from 'react'
import "../styles/App.css"
import Layout from './Layout'
import Home from './pages/Home'



function App() {
  

  return (
    <div className = "App">
    
        <Layout>
          
          <Home className= "mt-20"></Home>
        </Layout>
        
    </div>
  )
}

export default App
