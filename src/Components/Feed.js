import React from 'react';
import CommentList from '../Pages/JoonWooPark/Components/CommentList';

class Feed extends React.Component {
  render() {
    return (
      <div className="feeds-container">
        <section className="feed-personal-info">
          <span className="personal-photo"></span>
          <span className="personal-id">front_devpark</span>
        </section>
        <section className="feed-photo-container">
          <img
            alt="feed"
            src="/images/JoonWooPark/feeds/jeju_blossom.jpeg"
            className="feed-photo"
          />
        </section>
        <section className="feed-activity">
          <article className="activity-icons">
            <img alt="heart" src="/Images/nav/heart.svg" />
            <i className="far fa-comment"></i>
            <i className="far fa-paper-plane"></i>
            <i className="far fa-bookmark"></i>
          </article>
          <article className="activity-good-number">좋아요 12개</article>
          <article className="activity-info">
            <span className="info-personal-id">front_devpark</span>
            <span className="info-personal-content">제주도 유채꽃 벚꽃</span>
          </article>
          <ul className="comment-list">
            {this.props.commentList && (
              <CommentList commentList={this.props.commentList} />
            )}
          </ul>
          <article className="activity-time">11시간 전</article>
        </section>
        <section className="input-container">
          <i className="far fa-grin"></i>
          <input
            type="text"
            className="input-comment"
            placeholder="댓글 달기..."
            name="inputComment"
            onChange={e => this.props.handleInput(e)}
            onKeyDown={e => this.props.handleKeyDown(e)}
          />
          <span
            className="input-submit"
            onClick={() => this.props.addComment()}
          >
            게시
          </span>
        </section>
      </div>
    );
  }
}

export default Feed;
