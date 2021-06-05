import React from 'react';
import CommentsList from '../CommentsList/CommentsList';
import CommentInput from '../CommentInput/CommentInput';
import '../Main/Main.scss';

class Feed extends React.Component {
  render() {
    const { feed, addComment, toggleLike } = this.props;
    const {
      feedProfile,
      feedImage,
      feedId,
      isFeedLike,
      feedUser,
      feedContent,
    } = feed;

    return (
      <article>
        <div className="feedUpper">
          <img className="mainProfile" alt="profile" src={feedProfile} />
          <div className="feedProfile">
            <strong>{feedUser}</strong>
            <img src="/Images/SunJuOh/more.svg" alt="more" />
          </div>
        </div>
        <img className="feedImage" alt="main-image" src={feedImage} />
        <div className="feedLower">
          <div className="feedIcon">
            <div className="icon-left">
              <div className="iconSpace">
                <i
                  className={
                    isFeedLike
                      ? 'fas fa-heart fa-lg heart-red'
                      : 'far fa-heart fa-lg heart-black'
                  }
                  onClick={() => toggleLike(feedId)}
                />
                <img alt="bell" src="/Images/SunJuOh/notifiations.svg" />
                <img alt="send" src="/Images/SunJuOh/share.svg" />
              </div>
            </div>
            <div className="icon-right">
              <img alt="bookmark" src="/Images/SunJuOh/bookmark.svg" />
            </div>
          </div>
          <div className="contentWrapper">
            <div className="clickGood">
              <img alt="profile-image" src="/Images/SunJuOh/sohee.jpeg" />
              <strong>blue_sky</strong>
              <span>님</span>
              <strong>외 2512명</strong>
              <span>이 좋아합니다</span>
            </div>
            <div className="myContent">
              <strong>{feedUser}</strong>
              <span>{feedContent}</span>
            </div>
            <a href="">댓글 3개 모두 보기</a>
            <div>
              <ul className="commentContainer">
                {feed.commentList.map(comment => {
                  return (
                    <CommentsList
                      key={comment.id}
                      name={comment.userName}
                      comment={comment.content}
                    />
                  );
                })}
              </ul>
            </div>
            <p>21분 전</p>
          </div>
          <div className="inputWrapper">
            <img alt="happyface" src="/Images/SunJuOh/happyface.png" />
            <CommentInput feedId={feedId} addComment={addComment} />
          </div>
        </div>
      </article>
    );
  }
}

export default Feed;
