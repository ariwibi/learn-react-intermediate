import PropTypes from "prop-types";
import { bool } from "prop-types";
export default function SayHello({
  name,
  count,
  isDark,
  data,
  data1,
  onSubmit,
  mode,
}) {
  const { namex, city, since } = data1;
  return (
    <>
      <p>Hello, {name}</p>
      <p>Antrian ke-{count}</p>

      {isDark ? <p>Lamp is on</p> : <p>lamp is off</p>}

      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div>
        <p>{namex}</p>
        <p>{city}</p>
        <p>{since}</p>
      </div>
      <button onClick={onSubmit}>Click me</button>
      <p>{mode}</p>
    </>
  );
}

SayHello.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  isDark: bool,
  // data: PropTypes.array,
  data: PropTypes.arrayOf(PropTypes.string),
  data1: PropTypes.object,
  // data1: PropTypes.objectOf(PropTypes.number),
  // PropTypes.instanceOf

  onSubmit: PropTypes.func,
  mode: PropTypes.oneOf(["light", "dark"]),
};
