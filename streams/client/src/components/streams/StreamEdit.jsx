import { pick } from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, updateStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.updateStream(this.props.stream.id, formValues);
  };

  render() {
    console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          buttonText="Update Stream"
          onSubmit={this.onSubmit}
          initialValues={pick(this.props.stream, "title", "description")}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  return {
    stream: streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, updateStream })(
  StreamEdit
);
