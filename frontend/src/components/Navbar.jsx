import React from 'react'

export default function Navbar({ activePage, onChangePage }) {
  return (
    <div className="nav">
      <div className="page-inner nav-inner">
        <span className="nav-logo">ARCTURU</span>
        <div className="nav-links">
          <button type="button" className={`nl ${activePage === 'home' ? 'active' : ''}`} onClick={() => onChangePage('home')}>Главная</button>
          <button type="button" className={`nl ${activePage === 'about' ? 'active' : ''}`} onClick={() => onChangePage('about')}>О сервере</button>
          <button type="button" className={`nl ${activePage === 'wiki' ? 'active' : ''}`} onClick={() => onChangePage('wiki')}>Вики</button>
          <button type="button" className={`nl ${activePage === 'donate' ? 'active' : ''}`} onClick={() => onChangePage('donate')}>Донат</button>
        </div>
        <button type="button" className={`nl ${activePage === 'download' ? 'active' : ''}`} onClick={() => onChangePage('download')}>Arcturu.mc-join.me</button>
      </div>
    </div>
  )
}