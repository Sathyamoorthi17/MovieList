import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router-dom";
// import {useNavigate} from 'react-router-dom';



export function MovieList({ movies, setMovies }) {
  const history = useHistory();
  // const navigate = useNavigate();
  return (
    <section>
      <div className="movie-list">
        {movies.map((mv, index) => (
          <Movie
            key={index}
            name={mv.name}
            poster={mv.poster}
            rating={mv.rating}
            summary={mv.summary}
            id={index}
            EditMovieButton={
              <IconButton
                onClick={() => history.push("/movies/edit/" + index)}
                
                // onClick={() => navigate("/movies/edit/" + index)}
                aria-label="Edit"
                size="large"
                color="secondary"
              >
                <EditIcon fontSize="inherit" />
              </IconButton>
            }
            DeleteMovieButton={
              <IconButton
                onClick={() => {
                  console.log(index, movies);
                  // Allow all except the clicked (delete-button) movies
                  const remainingMovies = movies.filter(
                    (mv, idx) => idx !== index
                  );
                  console.log(remainingMovies);
                  setMovies(remainingMovies);
                }}
                aria-label="delete"
                size="large"
                color="error"
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            }
          />
        ))}
      </div>
    </section>
  );
}

// export function MovieList({ movies , setMovies}) {

//   return (
//     <section>

//       <div className="movie-list">
//         {movies.map((mv,index) => (
//           <Movie
//             key={index}
//             name={mv.name}
//             poster={mv.poster}
//             rating={mv.rating}
//             summary={mv.summary}
//             id={index}
//             setMovies={setMovies}
//             movies={movies}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
