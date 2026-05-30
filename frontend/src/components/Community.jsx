import React from 'react'
import avatar from '../images/avatar-placeholder.svg'

export default function Community(){
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img src={avatar} alt="community" className="img-fluid" style={{maxWidth:260}} />
        </div>
        <div className="col-md-6">
          <h4>Коммьюнити</h4>
          <p className="muted">Присоединяйтесь к нашему уютному Discord-сообществу! Здесь вы найдёте что-то для себя.</p>
          <a className="btn btn-primary btn-sm" href="#">Присоединиться</a>
        </div>
      </div>
    </section>
  )
}
