import React from 'react'

export default function Hero(){
  return (
    <div className="hero">
      <div className="hero-bg" />
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="hero-placeholder">
          <i style={{fontSize:28, color:'rgba(255,255,255,0.15)'}}>🖼️</i>
          <span>Сюда — hero-арт (скриншот сервера или рендер персонажей)</span>
        </div>
      </div>
    </div>
  )
}
