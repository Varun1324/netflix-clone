import React from 'react'
import DashboardHeader from './DashboardHeader'
import '../design/dashboard.css';

function Dashboard() {
  return (
    <>
      <DashboardHeader/>
      <div className="intro">
        <div className="poster" style={{ backgroundImage: 'url("https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
          
        </div>
        <div className="poster" style={{ backgroundImage: 'url("https://images-cdn.ubuy.co.in/651b073ba9e01902321bb1d5-netflix-stranger-things-one-sheet-wall.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
          
        </div>
        <div className="poster" style={{ backgroundImage: 'url("https://www.tallengestore.com/cdn/shop/products/HauntingOfHillHouse-NetflixHorrorTVShowPoster_4fc47c61-546d-4505-90a4-2c10def767ea.jpg?v=1625220897")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
         
        </div>
      </div>
      <div className="genere">
          <h3>Top picks on Netflix</h3>
      </div>
      <div className="container">
          <div className="card" style={{ backgroundImage: 'url("https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>

          <div className="card" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HYvVS-1BzWIoz9UXgCteI_K8IWM505kjTA&s")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>

          <div className="card" style={{ backgroundImage: 'url("https://m.media-amazon.com/images/M/MV5BMDM5ODBiN2ItOTk4Yi00NzgyLWE2YTktYzhjYTc2ODE4ZTE4XkEyXkFqcGc@._V1_.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>

          <div className="card" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Irul_%28film%29.jpg/220px-Irul_%28film%29.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>

          <div className="card" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Nowhere_%282023_film%29_poster.jpg/220px-Nowhere_%282023_film%29_poster.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>

          <div className="card" style={{ backgroundImage: 'url("https://m.media-amazon.com/images/M/MV5BMGMyNDg2ZjItMzk5MC00NzJmLTlmMDgtMmFjNjFmODg5ZTY5XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>

          <div className="card" style={{ backgroundImage: 'url("https://m.media-amazon.com/images/M/MV5BMGViZWEwOGItMGZlMC00YzE1LTk5ZWItMGYxYjhhMjBmNDMwXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>7</div>
      </div>
      <div className="genere">
          <h3>Action films on Netflix</h3>
      </div>
      <div className="container">
          <div className="card" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg/220px-Salaar_Part_1_%E2%80%93_Ceasefire.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          <div className="card" style={{ backgroundImage: 'url("https://m.media-amazon.com/images/M/MV5BY2ZlNWIxODMtN2YwZi00ZjNmLWIyN2UtZTFkYmZkNDQyNTAyXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          <div className="card" style={{ backgroundImage: 'url("https://m.media-amazon.com/images/M/MV5BYmQ2ODgyZjMtMmQyMy00ZWRhLTllOGUtZDI3MDkzNjFhZWQ2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          <div className="card" style={{ backgroundImage: 'url("https://m.media-amazon.com/images/M/MV5BYzNiNDM4NjYtZDMyMS00YTgyLWIzMWYtNmFhMjBiNWJiN2RjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          <div className="card" style={{ backgroundImage: 'url("https://m.media-amazon.com/images/M/MV5BMGYzM2QxNWEtY2EwZC00OTE2LWExZDEtNjQ0NDAyMjYzNGJlXkEyXkFqcGdeQXVyMTY1MjAwNDU0._V1_.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          <div className="card" style={{ backgroundImage: 'url("https://m.media-amazon.com/images/M/MV5BMzA1NjEwMjYtMTk4NS00YjllLWIzNTQtZDUyYjRiZWU5NzNkXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          <div className="card" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/en/d/df/Fighter_film_teaser.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
      </div>
      <div className="genere">
          <h3>Spy films on Netflix</h3>
      </div>
      <div className="container">
          <div className="card" style={{ backgroundImage: 'url("https://m.media-amazon.com/images/M/MV5BODBlNDM1OTMtYTg3Yy00NWM4LWE1MTMtYjVhMzU1ZTk2MTE0XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          <div className="card" style={{ backgroundImage: 'url("https://m.media-amazon.com/images/M/MV5BMTEzOTY5ODA2MDReQTJeQWpwZ15BbWU4MDI5NDkyMTYz._V1_.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          <div className="card" style={{ backgroundImage: 'url("https://m.media-amazon.com/images/M/MV5BMjZiYWI3MWMtM2NiZi00Y2E0LWI1ODctNmNhMDUyNGMzODkwXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          <div className="card" style={{ backgroundImage: 'url("https://m.media-amazon.com/images/M/MV5BMzU3YWYwNTQtZTdiMC00NjY5LTlmMTMtZDFlYTEyODBjMTk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          <div className="card" style={{ backgroundImage: 'url("https://m.media-amazon.com/images/M/MV5BN2Q4YTljNDAtMzQ4Yy00ZjQzLTgzYzEtMjZiNDg1ZTkyMWU5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          <div className="card" style={{ backgroundImage: 'url("https://m.media-amazon.com/images/I/91IHd8Vf1SL._AC_UF1000,1000_QL80_.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          <div className="card" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/en/d/d0/Safe_House_Poster.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
      </div>
    </>
  )
}

export default Dashboard;
