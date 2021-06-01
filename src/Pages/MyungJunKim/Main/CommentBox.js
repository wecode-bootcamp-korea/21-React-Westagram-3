import React from 'react';
import Comments from '../Main/Comments';
import Comment from '../Main/Comment';

class CommentBox extends React.Component {
  render() {
    const { contentsData, commentList, inputValue } = this.props;
    return (
      <>
        <article className="contents__icons">
          <div>
            <span>
              <i className="far fa-heart"></i>
            </span>
            <span>
              <i className="far fa-comment"></i>
            </span>
            <span>
              <i className="far fa-paper-plane"></i>
            </span>
          </div>
          <div>
            <span>
              <i className="far fa-bookmark"></i>
            </span>
          </div>
        </article>
        <article className="contents__feedback">
          <div>
            <img
              className="contents__small-image"
              alt="좋아요 계정들 프로필사진"
              src="https://images.unsplash.com/photo-1530018352490-c6eef07fd7e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=961&q=80"
            />
          </div>
          <div>
            <span>
              <b>myxxjun</b> 님 외 <b>1,840</b>명 이 좋아합니다
            </span>
          </div>
        </article>
        <article className="contents__info">
          <span>
            <b>hey_css</b> 2022년 출시예정 애플바이크!! 뒷바퀴...
            <span className="more">더보기</span>
          </span>
        </article>
        <div className="more-comment">
          <span className="more">댓글 311개 모두 보기</span>
        </div>
        <div className="comment-container">
          <ul>
            <Comments contentsData={contentsData} />
            <Comment commentList={commentList} />
          </ul>
        </div>
        <article className="comment-input-container">
          <div>
            <i className="far fa-smile"></i>
          </div>
          <form className="js-comment-form" onSubmit={this.props.handleSubmit}>
            <input
              onChange={this.props.handleInputarea}
              value={inputValue}
              className="js-comment-inputarea"
              placeholder="댓글 달기..."
            ></input>
            <button
              className="js-comment-button"
              disabled={inputValue.length < 1}
            >
              게시
            </button>
          </form>
        </article>
      </>
    );
  }
}

export default CommentBox;
