import React from 'react'

export default function DownloadPage() {
  return (
    <main className="server-page">
      <section className="server-hero">
        <div className="server-hero-copy">
          <div className="server-badge"><span />Сборка клиента</div>
          <h1 className="server-title">
            Скачать сборку
            <span>Arcturu</span>
          </h1>
          <p className="server-lead">
            Готовая сборка для игры на сервере. Выбери удобный источник.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '2rem', maxWidth: '400px' }}>
            <a href="https://modrinth.com/" target="_blank" rel="noreferrer" className="btn-g">
              Скачать с Modrinth
            </a>
            <a href="https://www.curseforge.com/" target="_blank" rel="noreferrer" className="btn-g">
              Скачать с CurseForge
            </a>
            <a href="https://drive.google.com/" target="_blank" rel="noreferrer" className="btn-g">
              Скачать с Google Drive
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}