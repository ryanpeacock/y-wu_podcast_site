import React from "react";
import { createSlug } from "../utilities/tools";

import "./Episode.css";

const Episode = ({ episode }) => {
  return (
    <div
      className="episode-card"
      style={{ backgroundImage: `url(${episode.itunes_image.href})` }}
    >
      <div className="overlay">
        <a href={`/episodes/${createSlug(episode.title)}`}>More Info</a>
      </div>
    </div>
  );
};

export default Episode;
