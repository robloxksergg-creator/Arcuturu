export default function ServerPage() {
  const showcase = [
    {
      title: 'Города игроков',
      text: 'Огромные города, улицы, районы и собственные государства, созданные игроками.',
    },
    {
      title: 'Живой мир',
      text: 'Каждая постройка становится частью общей истории сервера и его атмосферы.',
    },
    {
      title: 'Сообщество',
      text: 'Ивенты, совместные проекты, коллаборации и постоянное развитие мира.',
    },
  ]

  const timeline = [
    {
      year: '2026',
      title: 'Новая эра',
      text: 'Полное обновление сервера и создание единой игровой вселенной.',
    },
  ]

  return (
    <main className="server-page">
      <section className="server-hero">
        <div className="server-hero-copy">
          <div className="server-badge"><span />Выживание</div>
          <h1 className="server-title">
            Не просто сервер.
            <span>Отдельный мир.</span>
          </h1>
          <p className="server-lead">
            Arcturu — это огромная игровая вселенная, где игроки создают собственные города,
            фракции, истории и целые государства. Здесь мир развивается вместе с комьюнити.
          </p>
          <div className="server-actions">
            <a className="btn-g" href="https://discord.gg/7Gf562zwy" target="_blank" rel="noreferrer">Discord</a>
          </div>
          <div className="server-stats">
            <div><strong>1200+</strong><span>Игроков</span></div>
            <div><strong>340+</strong><span>Построек</span></div>
            <div><strong>24/7</strong><span>Онлайн</span></div>
            <div><strong>5 нед.</strong><span>Истории</span></div>
          </div>
        </div>

        <div className="server-visual" aria-hidden="true">
          <div className="server-visual-card">
            <div className="server-art-label">CITY RENDER</div>
          </div>
        </div>
      </section>

      <section className="server-section">
        <div className="sec-eyebrow">Мир игроков</div>
        <h2 className="sec-title">Истории создаются игроками</h2>
        <p className="sec-sub">На сервере нет одинаковых проектов: каждый город, фракция и постройка становятся частью общей истории мира.</p>
        <div className="server-showcase">
          {showcase.map((item) => (
            <article className="server-card" key={item.title}>
              <div className="server-card-art">ART</div>
              <div className="server-card-body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="server-section">
        <div className="sec-eyebrow">История проекта</div>
        <h2 className="sec-title">Развитие мира</h2>
        <div className="server-timeline">
          {timeline.map((item) => (
            <article className="server-timeline-item" key={item.year}>
              <strong>{item.year}</strong>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="server-cta">
        <h2>Сюда заходят строить. Здесь остаются жить.</h2>
        <p>Arcturu — это место, где проекты становятся частью истории, а игроки создают собственный мир вместе.</p>
        <a className="btn-g" href="https://discord.gg/7Gf562zwy" target="_blank" rel="noreferrer">Присоединиться к серверу</a>
      </section>
    </main>
  )
}