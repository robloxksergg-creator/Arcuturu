import React from 'react'
import avatar from '../images/avatar-placeholder.svg'

export default function Team(){
  return (
    <section className="container my-5">
      <div className="team-card rounded p-4 d-flex align-items-center">
        <div className="me-4 flex-fill">
          <h3>Наша команда</h3>
          <p className="muted">Узнайте больше потрясающих личностей проекта!</p>
          <p className="muted">Короткое описание лидера или команды. Место для текста и ссылок.</p>
          <div className="avatars mt-2">
            <img src={avatar} alt="a" className="avatar" />
            <img src={avatar} alt="b" className="avatar" />
            <img src={avatar} alt="c" className="avatar" />
          </div>
        </div>
        <div className="team-art ms-auto">
          <img src={avatar} alt="team art" className="img-fluid" style={{maxWidth:220}} />
        </div>
      </div>
    </section>
  )
}
