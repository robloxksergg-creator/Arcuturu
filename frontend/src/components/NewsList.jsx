import React from 'react'

export default function NewsList(){
  return (
    <section className="news-section">
      <div className="section-header">
        <div className="section-title">Новости сервера</div>
        <div className="section-sub">Будьте в курсе последних обновлений</div>
      </div>

      <div className="news-grid">
        <div className="news-card wide">
          <div className="news-card-img"><i style={{fontSize:28, color:'rgba(255,255,255,0.12)'}}>🖼️</i></div>
          <div className="news-card-body">
            <div className="news-tag">General</div>
            <div className="news-title">Вступай в команду</div>
            <div className="news-date">25 мая 2026</div>
            <div className="news-text">Хочешь помогать игрокам и участвовать в жизни сервера? Мы обновили правила, упростили описание ролей и собрали актуальную информацию.</div>
            <span className="news-more">Читать далее →</span>
          </div>
        </div>

        <div className="news-card">
          <div className="news-card-img"><i style={{fontSize:28, color:'rgba(255,255,255,0.12)'}}>🖼️</i></div>
          <div className="news-card-body">
            <div className="news-tag">Обновление</div>
            <div className="news-title">Новый сезон начинается</div>
            <div className="news-date">20 мая 2026</div>
            <div className="news-text">Новая карта, механики и ивенты.</div>
            <span className="news-more">Читать далее →</span>
          </div>
        </div>

        <div className="news-card">
          <div className="news-card-img"><i style={{fontSize:28, color:'rgba(255,255,255,0.12)'}}>🖼️</i></div>
          <div className="news-card-body">
            <div className="news-tag">Ивент</div>
            <div className="news-title">Летний турнир по PvP</div>
            <div className="news-date">15 мая 2026</div>
            <div className="news-text">Регистрация открыта, призы для победителей.</div>
            <span className="news-more">Читать далее →</span>
          </div>
        </div>
      </div>
    </section>
  )
}
