import React from 'react';

class Comments extends React.Component {
  render() {
    return (
      <ul>
        {this.props.commentsList.map((comment, idx) => {
          return (
            <li key={idx}>
              <b>myxxjun</b>
              {comment}
              <button>♡</button>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Comments;
