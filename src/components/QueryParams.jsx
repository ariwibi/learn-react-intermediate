import { useSearchParams } from "react-router-dom";

export default function CompanySearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name");
  const location = searchParams.get("location");

  function updateNameUrlSearchParams(newValue) {
    setSearchParams({ name: newValue });
  }
  return (
    <p>
      Looking for a {name} company in {location}
    </p>
  );
}
