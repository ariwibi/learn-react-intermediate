import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>ariwibi</footer>
    </>
  );
}
