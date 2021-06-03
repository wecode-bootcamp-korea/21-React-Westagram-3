import React from 'react';
import Nav from '../../../Components/Nav';
import Feed from '../Feed/Feed';
import './Main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      feedData: [],
    };
  }

  toggleLike = feedId => {
    const { feedData } = this.state;

    const changeHeart = feedData.map(feed => {
      if (feedId === feed.feedId) {
        feed.isFeedLike = !feed.isFeedLike;
      }
      return feed;
    });

    this.setState({ feedData: changeHeart });
  };

  addComment = (e, feedId, value, reset) => {
    e.preventDefault();
    const { feedData } = this.state;

    const newObj = {
      id: feedData[feedId].commentList.length + 1,
      userName: '_ocean_zoo',
      content: value,
    };

    const newComment = feedData.map(feed => {
      if (feed.feedId === feedId) {
        feed.commentList = feed.commentList.concat(newObj);
      }
      return feed;
    });

    this.setState(
      {
        feedData: newComment,
      },
      reset
    );
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedData: data,
        });
      });
  }

  render() {
    const { feedData } = this.state;
    return (
      <div className="superContainer">
        <section className="allWrapper">
          <Nav />
          <main>
            <div className="mainWrapper">
              <div className="main-left">
                <div className="storyBox">
                  <ul>
                    <li>
                      <img alt="profile" src="/Images/SunJuOh/songkang.jpeg" />
                      <p>songkang</p>
                    </li>
                    <li>
                      <img alt="profile" src="/Images/SunJuOh/sohee.jpeg" />
                      <p>sohee</p>
                    </li>
                    <li>
                      <img alt="profile" src="/Images/SunJuOh/jisoo.jpeg" />
                      <p>jisoo</p>
                    </li>
                    <li>
                      <img alt="profile" src="/Images/SunJuOh/seonho.jpeg" />
                      <p>seonho</p>
                    </li>
                    <li>
                      <img alt="profile" src="/Images/SunJuOh/junghan.jpeg" />
                      <p>junghan</p>
                    </li>
                    <li>
                      <img alt="profile" src="/Images/SunJuOh/ryujin.jpeg" />
                      <p>ryujin</p>
                    </li>
                    <li className="nextPointer">
                      <i className="fas fa-chevron-circle-right fa-2x" />
                    </li>
                  </ul>
                </div>
                {feedData.map(feed => {
                  return (
                    <Feed
                      key={feed.feedId}
                      feed={feed}
                      addComment={this.addComment}
                      toggleLike={this.toggleLike}
                    />
                  );
                })}
              </div>
              <div className="main-right">
                <div className="profileBox">
                  <div className="imageBox">
                    <img alt="me" src="/Images/SunJuOh/me.jpeg" />
                  </div>
                  <div className="nameBox">
                    <strong>_ocean_zoo</strong>
                    <span>sun ju</span>
                  </div>
                  <button>전환</button>
                </div>
                <div className="recommendBox">
                  <span className="recommendContent">회원님을 위한 추천</span>
                  <span className="recommendAll">모두 보기</span>
                </div>
                <div className="followBox">
                  <ul>
                    <li>
                      <img
                        alt="profile-image"
                        src="/Images/SunJuOh/wecode.png"
                      />
                      <div className="columnBox">
                        <strong>wecode_bootcamp</strong>
                        <span>kang_ming님 외 1명이 팔로우합니다</span>
                      </div>
                      <span className="followButton">팔로우</span>
                    </li>
                    <li>
                      <img
                        alt="profile-image"
                        src="/Images/SunJuOh/wework.jpeg"
                      />
                      <div className="columnBox">
                        <strong>wework</strong>
                        <span>with'_'me님 외 5명이 팔로우합니다</span>
                      </div>
                      <span className="followButton">팔로우</span>
                    </li>
                    <li>
                      <img alt="profile-image" src="/Images/SunJuOh/dog.jpeg" />
                      <div className="columnBox">
                        <strong>my_dog_</strong>
                        <span>Instagram 신규 가입</span>
                      </div>
                      <span className="followButton">팔로우</span>
                    </li>
                    <li>
                      <img
                        alt="profile-image"
                        src="/Images/SunJuOh/travel.jpg"
                      />
                      <div className="columnBox">
                        <strong>_go__with</strong>
                        <span>likely_ha님 외 27명이 팔로우합니다</span>
                      </div>
                      <span className="followButton">팔로우</span>
                    </li>
                  </ul>
                </div>
                <footer>
                  <span>
                    소개·도움말·홍보 센터·API·채용
                    정보·개인정보처리방침·약관·위치·인기 계정·해시태그·언어
                  </span>
                  <br />
                  <br />
                  <span>© 2021 INSTAGRAM FROM FACEBOOK</span>
                </footer>
              </div>
            </div>
          </main>
        </section>
      </div>
    );
  }
}

export default Main;
