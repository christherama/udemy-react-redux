import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <>
        <button className="ui negative button">Delete</button>
        <button className="ui button">Cancel</button>
      </>
    );
  }

  onDismiss = () => {
    history.push("/");
  };

  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          message="Are you sure you want to deletet this stream?"
          actions={this.renderActions()}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

export default connect(null, { fetchStream })(StreamDelete);
