import React, { useState } from 'react'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import WikiPage from './components/WikiPage'
import ServerPage from './components/ServerPage'
import DonatePage from './components/DonatePage'
import Footer from './components/Footer'

export default function App(){
  const [page, setPage] = useState('home')
  return (
    <div>
      <Navbar activePage={page} onChangePage={setPage} />
      {page === 'home' && <MainPage onOpenWiki={() => setPage('wiki')} />}
      {page === 'wiki' && <WikiPage />}
      {page === 'about' && <ServerPage />}
      {page === 'donate' && <DonatePage />}
      <Footer />
    </div>
  )
}
