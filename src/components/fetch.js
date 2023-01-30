import React, { useState } from "react";
import Search from "./Search";
import { useParams } from "react-router-dom";

function FetchApi() {
  const apiGet = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a9b14ca4e44146df74e49183d0560f3e&language=em-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };
  const { id } = useParams();
  const [data, setData] = useState([]);

  return (
    <div>
      My Api <br />
      {JSON.stringify(data, null)}
    </div>
  );
}

export default FetchApi;
