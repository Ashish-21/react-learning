import { useEffect, useState } from "react";

const arrayOfItems = ["apple", "mango", "orange"];

function DebouncedSearch() {
  const [query, setQuery] = useState("");
  const [debouceQuery, setDebouceQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event?.target?.value ?? "");
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouceQuery(query);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <div>
        <ul>
          {arrayOfItems
            ?.filter((elem) =>
              elem?.toLowerCase()?.includes(debouceQuery?.toLowerCase())
            )
            ?.map((elem) => {
              return <li key={elem}>{elem}</li>;
            })}
        </ul>
      </div>
      <div>
        <input
          value={query}
          onChange={(event) => handleInputChange(event)}
          placeholder="search"
        />
      </div>
    </div>
  );
}

export default DebouncedSearch;
