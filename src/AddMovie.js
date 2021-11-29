import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function AddMovie({ movies, setMovies }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const addMovie = () => {
    const newMovies = { name, poster, rating, summary, trailer };
    setMovies([...movies, newMovies]);
    resetMovieForm();
  };

  const resetMovieForm = () => {
    setName("");
    setPoster("");
    setRating("");
    setSummary("");
    setTrailer("");
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
      <Button onClick={addMovie} variant="outlined">
        Add Movie
      </Button>
    </div>
  );
}
