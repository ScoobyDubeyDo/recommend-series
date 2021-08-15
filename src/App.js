import "./styles.css";

import { useState } from "react";

function App() {
  const seriesDB = {
    Suspense: [
      { name: "Sherlock", rating: "9.1/10" },
      { name: "Dark", rating: "8.8/10" },
      { name: "Dexter", rating: "8.6/10" }
    ],
    Comedy: [
      { name: "How I met your mother", rating: "8.3/10" },
      { name: "The big bang theory", rating: "8.1/10" },
      { name: "Sex education", rating: "8.3/10" },
      { name: "Friends", rating: "8.9/10" },
      { name: "Brooklyn Nine-Nine", rating: "8.4/10" },
      { name: "Never Have I ever", rating: "7.9/10" },
      { name: "The office", rating: "8.9/10" }
    ],
    Drama: [
      { name: "Game of thrones", rating: "9.3/10" },
      { name: "The vampire diaries", rating: "7.7/10" },
      { name: "13 reason why", rating: "7.6/10" },
      { name: "Chilling Adventures of Sabrina", rating: "7.5/10" },
      { name: "The originals", rating: "8.2/10" }
    ],
    Fantasy: [
      { name: "Stranger things", rating: "8.7/10" },
      { name: "Lucifer", rating: "8.1/10" },
      { name: "The Witcher", rating: "8.2/10" }
    ],
    Action: [
      { name: "Arrow", rating: "7.5/10" },
      { name: "Legends of tomorrow", rating: "6.8/10" },
      { name: "Agents of shield", rating: "7.5/10" },
      { name: "The Defenders", rating: "7.3/10" },
      { name: "The Flash", rating: "7.7/10" },
      { name: "Supergirl", rating: "6.2/10" },
      { name: "Daredevil", rating: "8.6/10" },
      { name: "Batwoman", rating: "3.4/10" },
      { name: "The boys", rating: "8.7/10" },
      { name: "Punisher", rating: "8.5/10" },
      { name: "Titans", rating: "7.7/10" }
    ],
    Crime: [
      { name: "Breaking bad", rating: "9.4/10" },
      { name: "Better call Saul", rating: "8.7/10" },
      { name: "Mindhunter", rating: "8.6/10" },
      { name: "The wire", rating: "9.3/10" },
      { name: "Peaky Blinders", rating: "8.8/10" }
    ]
  };
  const genres = Object.keys(seriesDB);

  const [series, setSeries] = useState(
    <div className="show">The list will come here</div>
  );

  const genreClickHandler = (e) => {
    setSeries(
      seriesDB[e.target.innerText].map((asd) => {
        return (
          <div key={asd.name} className="show">
            <div>{asd.name}</div>
            <small>Rating: {asd.rating}</small>
          </div>
        );
      })
    );
  };
  return (
    <div className="App">
      <h1>🎬some series</h1>
      <p>Select a genre to get started</p>
      <div className="span">
        {genres.map((genre) => {
          return (
            <span className="genre" key={genre} onClick={genreClickHandler}>
              {genre}
            </span>
          );
        })}
      </div>
      <div className="output">{series}</div>
    </div>
  );
}

export default App;
