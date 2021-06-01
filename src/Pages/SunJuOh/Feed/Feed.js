import React from 'react';
import CommentInput from '../CommentInput/CommentInput';
import CommentsList from '../CommentsList/CommentsList';
import '../Main/Main.scss';
class Feed extends React.Component {
  render() {
    const { feed, handleInput, handleEnterKey, value, addComment } = this.props;

    return (
      <article>
        <div className="feedUpper">
          <img className="mainProfile" alt="profile" src={feed.feedProfile} />
          <div className="feedProfile">
            <strong>{feed.feedUser}</strong>
            <img src="/Images/SunJuOh/more.svg" />
          </div>
        </div>
        <img className="feedImage" alt="main-image" src={feed.feedImage} />
        <div className="feedLower">
          <div className="feedIcon">
            <div className="icon-left">
              <div className="iconSpace">
                <img alt="heart" src="/Images/SunJuOh/heart.svg" />
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
              <strong>{feed.feedUser}</strong>
              <span>{feed.feedContent}</span>
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
            <CommentInput
              feedId={feed.feedId}
              value={value}
              addComment={addComment}
              handleInput={handleInput}
              handleEnterKey={handleEnterKey}
            />
          </div>
        </div>
      </article>
    );
  }
}

export default Feed;
