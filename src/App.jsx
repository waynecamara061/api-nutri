import React, { useEffect, useState } from 'react'
import './style.css';

//https://sujeitoprogramador.com/rn-api/?api=posts
function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
      fetch(url)

        .then((p) => p.json())
        .then((json) => {
          setNutri(json)
        })
    }
    loadApi()
  }, [])


  return (
    <div className='blog-container'>
      <header>
        <h1>React Nutri</h1>
      </header>
      {nutri.map((item) => {
        return (
          <article key={item.id} className='article-content'>
            <strong className="article-description">
              {item.titulo}
            </strong>
            <img className='img-source' src={item.capa} alt={item.title} />
            <p className='subtitulo-content'>{item.subtitulo}</p>
            <p className='subtitulo-content'>Categoria: {item.categoria}</p>
            <a className='btn-view-more'> Acessar </a>
          </article>
        )
      })}
    </div>
  )
}

export default App;
