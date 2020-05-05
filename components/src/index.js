import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Roxy"
          timestamp="Today at 11:43am"
          comment="Nice work!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Greta"
          timestamp="Today at 9:01am"
          comment="I agree, but also you're wrong"
        />
      </ApprovalCard>
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Courtney"
        timestamp="Yesterday at 10:22pm"
        comment="Great late night read. Night night."
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Chris"
        timestamp="Sunday at 3:14pm"
        comment="Pie. That is all."
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
