import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ThemeButtons from './components/ThemeButtons'

function App () {
  return (
    <div className='
    bg-zinc-200 dark:bg-zinc-800 h-screen p-10 overflow-hidden box-border m-0' >
      <Routes>
         <Route path='/' element={<Layout />} />
      </Routes>
      <ThemeButtons />
    </div>
  )
}

export default App
