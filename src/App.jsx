import './App.css'
import React from 'react'
import Login from './pages/Homepage/Login'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Cards } from './pages/Dashboard/Cards'
import { ItemList } from './pages/Item/ItemList'


// Modam in dashboard
// Modam in ItemList

function App() {

  return (
    <div className="App">
      <ItemList/>
    </div>
  )
}

export default App
