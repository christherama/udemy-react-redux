import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  render() {
    return <div>SongList</div>;
  }
}

const mapStateToProps = ({ songs }) => {
  return { songs };
};

export default connect(mapStateToProps)(SongList);
