import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Sam" date="Today at 5:15PM" post="test post 1" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Dan" date="Yesterday at 12:02AM" post="test post 2" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Pam" date="Wednesday at 7:45AM" post="test post 3" avatar={faker.image.avatar()}/>
      </ApprovalCard>
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)
