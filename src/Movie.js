import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Counter } from "./Counter";
import InfoIcon from "@mui/icons-material/Info";
// import {useNavigate} from 'react-router-dom';
import { useHistory } from "react-router-dom";

export function Movie({
  name,
  poster,
  rating,
  summary,
  id,
  DeleteMovieButton,
  EditMovieButton,
}) {
  //setShow will help to change show
  const [show, setShow] = useState(true);
  const history = useHistory();
  // const navigate = useNavigate();

  //conditional styling
  // const styles = {display : show ? "block" : "none"}
  return (
    <div className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />
      <div className="movie-specs">
        <h3 className="movie-name">
          {name}
          <IconButton
            className="movie-show-button"
            onClick={() => setShow(!show)}
            color="primary"
            aria-label={show ? "Hide" : "Show"}
          >
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>

          <IconButton
            onClick={() => history.push("/movies/" + id)}
            // onClick={() => navigate("/movies/" + id)}
            color="primary"
            aria-label="Movie details"
          >
            <InfoIcon />
          </IconButton>
        </h3>
        <p className="movie-rating">⭐ {rating}</p>
      </div>

      {/* conditional styling */}
      {/* <p style = {styles} >{summary}</p> */}

      {/* // conditional rendering */}
      {show ? <p>{summary}</p> : ""}
      <div className="Like-Unlike-delete">
        <Counter />

        {/* Editing the Movies */}

        {EditMovieButton}

        {/* Deleting the Movies */}

        {DeleteMovieButton}

        {/* or */}

        {/* <IconButton 
      onClick={() => {
        console.log(id,movies);
        // Allow all except the clicked (delete-button) movies
        const remainingMovies = (movies.filter((mv,index) => index != id ));
        console.log(remainingMovies);
        setMovies(remainingMovies);
      } }
      aria-label="delete" size="large" color="error">
       <DeleteIcon fontSize="inherit" />
      </IconButton> */}
      </div>
    </div>
  );
}
