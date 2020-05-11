import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  return (
    song && (
      <div>
        <h3>Details for:</h3>
        <p>
          <strong>Title:</strong> {song.title}
          <br />
          <strong>Duration:</strong> {song.duration}
        </p>
      </div>
    )
  );
};

const mapStateToProps = ({ selectedSong }) => {
  return { song: selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
