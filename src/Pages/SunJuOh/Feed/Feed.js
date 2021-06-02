import React from 'react';
import CommentInput from '../CommentInput/CommentInput';
import CommentsList from '../CommentsList/CommentsList';
import '../Main/Main.scss';
class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFeedLike: false,
    };
  }

  toggleLike = () => {
    this.setState({
      isFeedLike: !this.state.isFeedLike,
    });
  };

  render() {
    const { feed, addComment } = this.props;

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
                <i
                  className={
                    this.state.isFeedLike
                      ? 'fas fa-heart fa-lg heart-red'
                      : 'far fa-heart fa-lg heart-black'
                  }
                  onClick={this.toggleLike}
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
            <CommentInput feedId={feed.feedId} addComment={addComment} />
          </div>
        </div>
      </article>
    );
  }
}

export default Feed;
