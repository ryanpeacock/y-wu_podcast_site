import React, { useState } from "react";
import Episode from "./Episode";
import "./EpisodeList.css";

const EpisodesList = ({ episodes }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);

  return (
    <div className="episodes main-container">
      <div className="search-input">
        <input
          type="text"
          name="searchText"
          value={searchText}
          onChange={setSearchText}
        />
      </div>
      <div className="episodes-list">
        {episodes.map((episode) => {
          return <Episode episode={episode} />;
        })}
      </div>
    </div>
  );
};

export default EpisodesList;
