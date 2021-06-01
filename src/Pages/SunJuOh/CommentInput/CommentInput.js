import React from 'react';

class CommentInput extends React.Component {
  render() {
    const { value, handleInput, addComment, feedId } = this.props;
    const buttonValid = value.length > 0;

    return (
      <form>
        <div className="inputBox">
          <input
            className="inputValue"
            type="text"
            value={value}
            onChange={handleInput}
            placeholder="댓글 달기..."
          />
          <button
            type="submit"
            className="pressPost"
            onClick={() => addComment(feedId)}
            disabled={buttonValid ? false : true}
          >
            게시
          </button>
        </div>
      </form>
    );
  }
}

export default CommentInput;
