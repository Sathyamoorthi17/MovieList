import { useState } from 'react';

export function ColorList() {
  //setColor will help to change color
  const [color, setColor] = useState("orange");
  const styles = { backgroundColor: color, color: "black" };
  const InitialColors = ["crimson", "orange", "blue", "violet"];
  const [colors, setColors] = useState(InitialColors);
  //setColors will help to change color
  return (
    <div>
      <input
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a Color" />
      <button onClick={() => setColors([...colors, color])}>Add Color</button>
      {colors.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
function ColorBox({ color }) {
  const styles = {
    height: "75px",
    width: "150px",
    backgroundColor: color,
    margin: "10px 0px",
  };
  return (
    <div style={styles}></div>
  );
}
