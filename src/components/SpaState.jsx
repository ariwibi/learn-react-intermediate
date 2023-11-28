import { useState } from "react";
import PropTypes from "prop-types";
function HomePage() {
  return <p>Hello World</p>;
}
function AboutPage() {
  return <p>Hello About</p>;
}
function FAQPage() {
  return <p>Hello FAQ</p>;
}

function Link({ target, navigate, children }) {
  return (
    <a
      href={target}
      onClick={(event) => {
        event.preventDefault();
        navigate(target);
      }}>
      {children}
    </a>
  );
}

Link.propTypes = {
  target: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default function SpaState() {
  const [page, setPage] = useState("/");

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link target="/" navigate={() => setPage("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link target="/about" navigate={() => setPage("/about")}>
                {/* {console.log(target)} */}
                About
              </Link>
            </li>
            <li>
              <Link target="/" navigate={() => setPage("/faq")}>
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {page === "/" && <HomePage />}
        {page === "/about" && <AboutPage />}
        {page === "/faq" && <FAQPage />}
      </main>
      <footer></footer>
    </>
  );
}
