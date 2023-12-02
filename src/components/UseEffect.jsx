import { useEffect, useState } from "react";

export default function UseEffect() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setProfile("ariwibi");
    console.log(profile);

    return () => {
      setProfile(null);
      console.log(profile);
    };
  }, []);

  if (profile === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <p>{profile}</p>
    </>
  );
}
