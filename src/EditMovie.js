import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import {useNavigate} from 'react-router-dom';

export function EditMovie({ movies, setMovies }) {
  const { id } = useParams();
  const movie = movies[id];
  console.log(id, movie);
  
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const EditMovie = () => {
    const updateMovie = { name, poster, rating, summary, trailer };

    //1.copy array
    //2.replace element in copy array

    const copyMovies = [...movies];
    copyMovies[id] = updateMovie;

    setMovies(copyMovies);
    
    const History = useHistory();
    History.push("/movies");

    // const navigate = useNavigate();
    // navigate("/movies");
  };

  return (
    <div className="add-movie-form">
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="outlined" />
      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        id="outlined-basic"
        label="Poster url"
        variant="outlined" />
      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        id="outlined-basic"
        label="Rating"
        variant="outlined" />
      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        id="outlined-basic"
        label="Summary"
        variant="outlined" />
        <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        id="outlined-basic"
        label="Trailer"
        variant="outlined" />
      <Button onClick={EditMovie} variant="outlined" color="success" >
        Save
      </Button>
    </div>
  );
}
