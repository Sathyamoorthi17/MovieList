<<<<<<< HEAD
import React from "react";
import { Routes, Route, Link, useParams, useHistory } from "react-router-dom";
import "./App.css";
import { ColorList } from "./ColorList";
import { MovieList } from "./MovieList";
import {AddMovie} from "./AddMovie";
import {useState} from "react";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {EditMovie} from "./EditMovie";
// import { useHistory } from "react-router-dom";
// import {useNavigate} from 'react-router-dom';

function App() {
  const Initial_Movies = [
    {
      name: "Aadukalam",
      poster:
        "https://mir-s3-cdn-cf.behance.net/projects/original/d98a8d112426115.Y3JvcCwyNDgwLDE5MzksMCw4Nzc.jpg",
      rating: "8.1",
      summary: `Pettaikaaran has an impeccable track record of successes in rooster fights. However, when one of his aides, Karuppu, does not follow his instructions in a fight, it creates enmity between them.`,
     trailer:"https://www.youtube.com/embed/bi701HCEHGo"
    },
    {
      name: "Soorarai Pottru",
      poster:
        "https://i.pinimg.com/originals/41/99/00/4199001a1cced80374c89ccf1078d345.jpg",
      rating: "9.1",
      summary: `Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest.`,
      trailer:"https://www.youtube.com/embed/fa_DIwRsa"
    },
    {
      name: "M.S. Dhoni: The Untold Story",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      rating: "7.9",
      summary: `M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.`,
      trailer:"https://www.youtube.com/embed/6L6XqWoS8tw"
    },
    {
      name: "The Dark Knight",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: "9",
      summary: `After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.`,
      trailer:"https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
      name: "Black Panther",
      poster: "https://movieposters2.com/images/1590502-b.jpg",
      rating: "7.3",
      summary: `After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.`,
      trailer:"https://www.youtube.com/embed/xjDjIWPwcPU"
    },
    {
      name: "Interstellar",
      poster:
        "https://cdn.shopify.com/s/files/1/1416/8662/products/interstellar_2014_advance_original_film_art_682852f2-23f6-46de-a1db-4029d5b6f0b4_5000x.jpg?v=1574284010",
      rating: "8.6",
      summary: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.`,
      trailer:"https://www.youtube.com/embed/zSWdZVtXT7E"
    },
  ];

  const [movies, setMovies] = useState(Initial_Movies);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/movies/add">Add Movies</Link>
          </li>
          <li>
            <Link to="/color/game">color Game</Link>
          </li>
        </ul>
      </nav>

      <Routes>

      <Route exact path="/">
          <Welcome />
          <MovieDetails />
      </Route>

      <Route path="/movies/add">
        <AddMovie movies={movies} setMovies={setMovies} />
      </Route>

        {/* why we use : for id is it change the id to variable */}
      <Route path="/movies/:id">
        <MovieDetails />
      </Route>
      
      <Route path="/movies/edit/:id">
         <EditMovie movies={movies} setMovies={setMovies} /> 
      </Route>

      <Route path="/movies">
          <MovieList movies={movies} setMovies={setMovies} />
      </Route>

      <Route path="/color/game">
          <ColorList />
      </Route>

      <Route path="**">
          <NotFound />
      </Route>

        </Routes>
=======
import { useState } from 'react';
import './App.css';

function App() {
const Movies = [
  {
    name : "Aadukalam",
    poster : "https://mir-s3-cdn-cf.behance.net/projects/original/d98a8d112426115.Y3JvcCwyNDgwLDE5MzksMCw4Nzc.jpg",
    rating : "8.1",
    summary : `Pettaikaaran has an impeccable track record of successes in rooster fights. However, when one of his aides, Karuppu, does not follow his instructions in a fight, it creates enmity between them.`,
  },
  {
    name : "Soorarai Pottru",
    poster : "https://i.pinimg.com/originals/41/99/00/4199001a1cced80374c89ccf1078d345.jpg",
    rating : "9.1",
    summary : `Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest.`,
  },
  {
    name : "M.S. Dhoni: The Untold Story",
    poster : "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    rating : "7.9",
    summary : `M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.`,
  },
  {
    name : "The Dark Knight",
    poster : "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    rating : "9",
    summary : `After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.`,
  },
  {
    name : "Black Panther",
    poster : "https://movieposters2.com/images/1590502-b.jpg",
    rating : "7.3",
    summary : `After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.`,
  },
  {
    name : "Interstellar",
    poster : "https://cdn.shopify.com/s/files/1/1416/8662/products/interstellar_2014_advance_original_film_art_682852f2-23f6-46de-a1db-4029d5b6f0b4_5000x.jpg?v=1574284010",
    rating : "8.6",
    summary : `When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.`,
  }
]

  return (
    <div className="App">
      <div className = "movie-list">
        {Movies.map((mv) => (
          <Movie name={mv.name} poster={mv.poster} rating={mv.rating} summary={mv.summary}/>
        ))}
      </div>
      
>>>>>>> 0bf2c91d41bcb0d5b9cf45114b7f9b9dbf0c08bf
    </div>
  );
}

<<<<<<< HEAD
// App (Movies) (Common component)
// MovieList {movies} AddMovie {movies}

function MovieDetails({ movies }){
  const { id } = useParams();
  const movie = movies[id];
  const history = useHistory();
  // const navigate = useNavigate();

  // console.log( id, movies )

  return(
    <div>
      {/* <iframe width="100%" height="530" src="https://www.youtube.com/embed/bi701HCEHGo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      <iframe width="100%" height="530" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="movie-detail-container">
      <div className="movie-specs">
      {/* <h3 className="movie-name">Aadukalam</h3>
      <p className="movie-rating">⭐ 8.1</p> */}
        <h3 className="movie-name">{movie.name}</h3>
        <p className="movie-rating">⭐ {movie.rating}</p>
      </div>
      {/* <p>Pettaikaaran has an impeccable track record of successes in rooster fights. However, when one of his aides, Karuppu, does not follow his instructions in a fight, it creates enmity between them.</p> */}
      <p>{movie.summary}</p>
      <Button variant="contained" onClick={() => history.goBack()} startIcon={<ArrowBackIosIcon />}>Back</Button>
      {/* <Button variant="contained" onClick={() => navigate.goBack()} startIcon={<ArrowBackIosIcon />}>Back</Button> */}
      </div>
=======
function Counter(){
  const [like,setLike] = useState(0);
  const [Dislike,setDisLike] = useState(0);
  return(
    <div className="counter-container">
      <button className="likes-dislikes" onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button className="likes-dislikes" onClick={() => setDisLike(Dislike + 1)}>👎 {Dislike}</button>
>>>>>>> 0bf2c91d41bcb0d5b9cf45114b7f9b9dbf0c08bf
    </div>
  );
}

<<<<<<< HEAD
function NotFound(){
  return(
    <div>
      <h1 className="not-found">404 NotFound</h1>
      <img className="not-found-img" src="https://webartdevelopers.com/blog/wp-content/uploads/2021/05/404-error-page-svg-animation.gif" alt="404 NotFound" />
=======
function Movie({name,poster,rating,summary}){
  return(
    <div className="movie-container">
      <img className = "movie-poster" src={poster} alt={name}/>
    <div className="movie-specs">
    <h3 className="movie-name">{name}</h3>
    <p className="movie-rating">⭐ {rating}</p>
    </div>
    <p>{summary}</p>
    <Counter/>
>>>>>>> 0bf2c91d41bcb0d5b9cf45114b7f9b9dbf0c08bf
    </div>
  )
}

<<<<<<< HEAD
function Welcome() {
  return <h1>Welcome All !!!✨</h1>;
}

=======
>>>>>>> 0bf2c91d41bcb0d5b9cf45114b7f9b9dbf0c08bf
export default App;
