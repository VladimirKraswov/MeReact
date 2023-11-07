import React from "./react.js";
import { render } from "./react-dom.js";

function generateHslaColors(saturation, lightness, alpha, amount) {
  let colors = [];
  let huedelta = Math.trunc(360 / amount);

  for (let i = 0; i < amount; i++) {
    let hue = i * huedelta;
    colors.push(`hsla(${hue},${saturation}%,${lightness}%,${alpha})`);
  }

  return colors;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const App = () => {
  // const [count, setCount] = useState(0);

  var foo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // useEffect(() => {
  //   setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);
  // }, []);

  return (
    <div {...{ class: "container", "data-count": String(5) }}>
      {foo.map((e) => (
        <div
          style={`
        width: 100px; 
        height: 100px;
        background: hsla(${getRandomArbitrary(0, 360)},${getRandomArbitrary(
            40,
            60
          )}%,${50}%,${1});
        `}
        />
      ))}
      <h1>Hello, My React</h1>
      <div>Count: {String(5)}</div>
      Text node without tags
      <img src="https://i.ibb.co/M6LdN5m/2.png" width="400" />
      <button onclick={() => {}}>-1</button>
      <button onclick={() => {}}>+1</button>
    </div>
  );
};

render(<App />, document.getElementById("app"));
