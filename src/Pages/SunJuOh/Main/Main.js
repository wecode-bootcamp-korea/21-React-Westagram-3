import React from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav';

class Main extends React.Component {
  render() {
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
                <article>
                  <div className="feedUpper">
                    <img
                      className="mainProfile"
                      alt="profile"
                      src="/Images/SunJuOh/hyoseop.jpeg"
                    />
                    <div className="feedProfile">
                      <strong>imhyoseop</strong>
                      <img src="/Images/SunJuOh/more.svg" />
                    </div>
                  </div>
                  <img
                    className="feedImage"
                    alt="main-image"
                    src="/Images/SunJuOh/feed.jpeg"
                  />
                  <div className="feedLower">
                    <div className="feedIcon">
                      <div className="icon-left">
                        <div className="iconSpace">
                          <img alt="heart" src="/Images/SunJuOh/heart.svg" />
                          <img
                            alt="bell"
                            src="/Images/SunJuOh/notifiations.svg"
                          />
                          <img alt="send" src="/Images/SunJuOh/share.svg" />
                        </div>
                      </div>
                      <div className="icon-right">
                        <img
                          alt="bookmark"
                          src="/Images/SunJuOh/bookmark.svg"
                        />
                      </div>
                    </div>
                    <div className="contentWrapper">
                      <div className="clickGood">
                        <img
                          alt="profile-image"
                          src="/Images/SunJuOh/sohee.jpeg"
                        />
                        <strong>blue_sky</strong>
                        <span>님</span>
                        <strong>외 2512명</strong>
                        <span>이 좋아합니다</span>
                      </div>
                      <div className="myContent">
                        <strong>imhyoseop</strong>
                        <span>happy :)</span>
                      </div>
                      <a href="">댓글 3개 모두 보기</a>
                      <ul className="commentList">
                        <li>
                          <strong>june___kang</strong>
                          <span>멋있어요~~~~</span>
                        </li>
                        <li>
                          <strong>araaaaan</strong>
                          <span>저도 여행 가고싶어요!!!!</span>
                        </li>
                      </ul>
                      <p>21분 전</p>
                    </div>
                    <div className="inputWrapper">
                      <img
                        alt="happyface"
                        src="/Images/SunJuOh/happyface.png"
                      />
                      <div className="inputBox">
                        <input
                          className="inputValue"
                          type="text"
                          placeholder="댓글 달기..."
                        />
                        <button className="pressPost">게시</button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="main-right">
                <div className="profileBox">
                  <div className="imageBox">
                    <img alt="my-image" src="/Images/SunJuOh/me.jpeg" />
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
