import LocalContext from "./ReactContext";

export default function MyContext() {
  return (
    <LocalContext.Consumer>
      {(local, setLocal) => console.log(setLocal)}
    </LocalContext.Consumer>
  );
}
