import heroBg from '../images/hero-bg.png'
import React, { useState } from 'react'
import teamFeniksovich from '../images/team-feniksovich.png'

const teamSlides = [
  {
    id: 'feniksovich',
    image: teamFeniksovich,
    alt: 'Feniksovich',
  },
]

export default function MainPage({ onOpenWiki }) {
  const [activeTeamSlide, setActiveTeamSlide] = useState(0)
  const currentTeamSlide = teamSlides[activeTeamSlide]

  function showPreviousTeamSlide() {
    setActiveTeamSlide((index) => (index - 1 + teamSlides.length) % teamSlides.length)
  }

  function showNextTeamSlide() {
    setActiveTeamSlide((index) => (index + 1) % teamSlides.length)
  }

  return (
    <div className="site">
      <div className="page-inner">
        <section className="hero" id="home">
          <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
          <div className="side-left">SEASON II<span>ERA OF CREATION</span></div>
          <div className="side-right">ONLINE · 127</div>

          <div className="hero-content">
            <div className="hero-chip"><span className="hero-dot" />Creative Multiplayer Universe</div>
            <h1 className="hero-title">ARCTURU</h1>
            <p className="hero-sub">Мир, созданный игроками</p>

            <div className="hero-btns">
              <a className="btn-g" href="#" onClick={(event) => { event.preventDefault(); onOpenWiki?.() }}>Лор</a>
              <a className="btn-g" href="https://discord.gg/7Gf562zwy" target="_blank" rel="noreferrer">Discord</a>
              <a className="btn-g" href="#about">О сервере</a>
            </div>
          </div>
        </section>

        <section className="stats-bar">
          <div className="stat">
            <div className="stat-num">1 СЕЗОН</div>
            <div className="stat-label">Текущий сезон</div>
          </div>
          <div className="stat">
            <div className="stat-num">127</div>
            <div className="stat-label">ONLINE</div>
          </div>
          <div className="stat">
            <div className="stat-num">500+</div>
            <div className="stat-label">DISCORD</div>
          </div>
          <div className="stat">
            <div className="stat-num">ЖИВОЙ МИР</div>
            <div className="stat-label">Проект</div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="sec-eyebrow">Возможности</div>
          <h2 className="sec-title">Все что нужно строителю</h2>
          <p className="sec-sub">Инструменты и система, созданная специально под творческую игру.</p>
          <div className="feat-grid">
            <div className="feat">
              <div className="feat-top">
                <div className="feat-icon fi-purple"><span>📜</span></div>
                <div className="feat-name">Лор</div>
              </div>
              <div className="feat-desc">Полная история мира, персонажей и событий Arcturu.</div>
            </div>
            <div className="feat">
              <div className="feat-top">
                <div className="feat-icon fi-teal"><span>🌍</span></div>
                <div className="feat-name">Мир</div>
              </div>
              <div className="feat-desc">Уникальные биомы, зоны и публичные пространства.</div>
            </div>
            <div className="feat">
              <div className="feat-top">
                <div className="feat-icon fi-coral"><span>🏙️</span></div>
                <div className="feat-name">Города</div>
              </div>
              <div className="feat-desc">Крупные игровые города и их ключевые постройки.</div>
            </div>
            <div className="feat">
              <div className="feat-top">
                <div className="feat-icon fi-amber"><span>⚔️</span></div>
                <div className="feat-name">Фракции</div>
              </div>
              <div className="feat-desc">Организации игроков, их правила и достижения.</div>
            </div>
            <div className="feat">
              <div className="feat-top">
                <div className="feat-icon fi-blue"><span>📚</span></div>
                <div className="feat-name">История</div>
              </div>
              <div className="feat-desc">Краткие летописи и важные вехи проекта.</div>
            </div>
            <div className="feat">
              <div className="feat-top">
                <div className="feat-icon fi-pink"><span>🛠️</span></div>
                <div className="feat-name">Системы</div>
              </div>
              <div className="feat-desc">Ключевые игровые механики и правила взаимодействия.</div>
            </div>
          </div>
        </section>

        <section className="news-section" id="news">
          <div className="s-head">
            <div>
              <div className="sec-eyebrow">Новости</div>
              <h2 className="sec-title" style={{ marginBottom: 0 }}>Последние события</h2>
            </div>
            <a className="s-link" href="#">Все новости →</a>
          </div>
          <div className="news-big">
            <div className="ncard vertical">
              <div className="ncard-img top"><span>🖼️</span></div>
              <div className="ncard-body">
                <span className="ntag t-gen">General</span>
                <div className="ntitle">Вступай в команду Arcturu</div>
                <div className="ndate">25 мая 2026</div>
                <div className="ntext">Хочешь помогать игрокам и развивать сервер? Набор модераторов открыт: обновили правила и упростили описание ролей.</div>
                <a className="nmore" href="#">Читать далее →</a>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div className="ncard">
                <div className="ncard-img horiz"><span>🖼️</span></div>
                <div className="ncard-body">
                  <span className="ntag t-con">Конкурс</span>
                  <div className="ntitle">BuildBattle — необычный конкурс</div>
                  <div className="ndate">29 апр. 2026</div>
                  <div className="ntext">Призовой фонд 3000 руб.</div>
                  <a className="nmore" href="#">Читать →</a>
                </div>
              </div>
              <div className="ncard">
                <div className="ncard-img horiz"><span>🖼️</span></div>
                <div className="ncard-body">
                  <span className="ntag t-ev">Ивент</span>
                  <div className="ntitle">Мастер-класс: Ландшафт</div>
                  <div className="ndate">19 апр. 2026</div>
                  <div className="ntext">25 апреля в 16:00 МСК.</div>
                  <a className="nmore" href="#">Читать →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section" id="team">
          <div className="team-wrap">
            <div className="team-carousel" aria-label="Участники команды">
              <button
                className="team-arrow team-arrow-prev"
                type="button"
                onClick={showPreviousTeamSlide}
                aria-label="Предыдущая карточка"
              >
                ‹
              </button>

              <div className="tcv-card">
                <div className="tcv-image-viewport">
                  <img className="tcv-poster" src={currentTeamSlide.image} alt={currentTeamSlide.alt} />
                </div>
              </div>

              <button
                className="team-arrow team-arrow-next"
                type="button"
                onClick={showNextTeamSlide}
                aria-label="Следующая карточка"
              >
                ›
              </button>

              <div className="team-pages" aria-label="Страницы карточек">
                {teamSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    className={`team-page-dot ${index === activeTeamSlide ? 'active' : ''}`}
                    type="button"
                    onClick={() => setActiveTeamSlide(index)}
                    aria-label={`Открыть карточку ${index + 1}`}
                    aria-current={index === activeTeamSlide ? 'true' : undefined}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
