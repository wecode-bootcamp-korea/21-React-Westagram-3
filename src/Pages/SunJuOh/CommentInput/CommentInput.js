import React from 'react';

class CommentInput extends React.Component {
  render() {
    const { value, handleInput, addComment, handleEnterKey } = this.props;
    const buttonValid = value.length > 0;

    return (
      <div className="inputBox">
        <input
          className="inputValue"
          type="text"
          value={value}
          onChange={handleInput}
          onKeyDown={handleEnterKey}
          placeholder="댓글 달기..."
        />
        <button
          className="pressPost"
          onClick={addComment}
          disabled={buttonValid ? false : true}
        >
          게시
        </button>
      </div>
    );
  }
}

export default CommentInput;
