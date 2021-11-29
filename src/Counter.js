import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  //setLike is the function will help to update the like
  const [like, setLike] = useState(0);
  const [Dislike, setDisLike] = useState(0);
  return (
    <div className="counter-container">
      <IconButton className="likes-dislikes" onClick={() => setLike(like + 1)} color="primary" aria-label="upload picture">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton className="likes-dislikes" onClick={() => setDisLike(Dislike + 1)} color="error" aria-label="upload picture">
        <Badge badgeContent={Dislike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
