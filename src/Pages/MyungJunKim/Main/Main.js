import React from 'react';
import Nav from '../../../Components/Nav';
import Comments from '../Main/Comments';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      commentsList: [],
    };
  }

  handleinputarea = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      inputValue: '',
      commentsList: this.state.commentsList.concat([this.state.inputValue]),
    });
  };

  render() {
    return (
      <div className="main-myung">
        <Nav />
        <main>
          <div className="feeds-container">
            <div className="feeds">
              <div className="story">
                <ul>
                  <li>
                    <div className="profile-container">
                      <div className="profile-wrapper">
                        <div className="profile-gradation-animate"></div>
                        <div className="profile__image-wrapper">
                          <div className="profile__image-small-wrapper"></div>
                          <img
                            className="profile__image"
                            alt="프로필 이미지"
                            src="https://images.unsplash.com/photo-1575715290166-71463c1244ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3578&q=80"
                          />
                        </div>
                      </div>
                      <span> myxxjun</span>
                    </div>
                  </li>
                  <li>
                    <div className="profile-container">
                      <div className="profile-wrapper">
                        <div className="profile-gradation-animate"></div>
                        <div className="profile__image-wrapper">
                          <div className="profile__image-small-wrapper"></div>
                          <img
                            alt="프로필 이미지"
                            src="https://images.unsplash.com/photo-1575715290166-71463c1244ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3578&q=80"
                          />
                        </div>
                      </div>
                      <span> myxxjun</span>
                    </div>
                  </li>
                  <li>
                    <div className="profile-container">
                      <div className="profile-wrapper">
                        <div className="profile-gradation-animate"></div>
                        <div className="profile__image-wrapper">
                          <div className="profile__image-small-wrapper"></div>
                          <img
                            className="profile__image"
                            alt="프로필 이미지"
                            src="https://images.unsplash.com/photo-1575715290166-71463c1244ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3578&q=80"
                          />
                        </div>
                      </div>
                      <span> myxxjun</span>
                    </div>
                  </li>
                  <li>
                    <div className="profile-container">
                      <div className="profile-wrapper">
                        <div className="profile-gradation-animate"></div>
                        <div className="profile__image-wrapper">
                          <div className="profile__image-small-wrapper"></div>
                          <img
                            className="profile__image"
                            alt="프로필 이미지"
                            src="https://images.unsplash.com/photo-1575715290166-71463c1244ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3578&q=80"
                          />
                        </div>
                      </div>
                      <span> myxxjun</span>
                    </div>
                  </li>
                  <li>
                    <div className="profile-container">
                      <div className="profile-wrapper">
                        <div className="profile-gradation-animate"></div>
                        <div className="profile__image-wrapper">
                          <div className="profile__image-small-wrapper"></div>
                          <img
                            className="profile__image"
                            alt="프로필 이미지"
                            src="https://images.unsplash.com/photo-1575715290166-71463c1244ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3578&q=80"
                          />
                        </div>
                      </div>
                      <span> myxxjun</span>
                    </div>
                  </li>
                  <li>
                    <div className="profile-container">
                      <div className="profile-wrapper">
                        <div className="profile-gradation-animate"></div>
                        <div className="profile__image-wrapper">
                          <div className="profile__image-small-wrapper"></div>
                          <img
                            className="profile__image"
                            alt="프로필 이미지"
                            src="https://images.unsplash.com/photo-1575715290166-71463c1244ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3578&q=80"
                          />
                        </div>
                      </div>
                      <span> myxxjun</span>
                    </div>
                  </li>
                  <li>
                    <div className="profile-container">
                      <div className="profile-wrapper">
                        <div className="profile-gradation-animate"></div>
                        <div className="profile__image-wrapper">
                          <div className="profile__image-small-wrapper"></div>
                          <img
                            className="profile__image"
                            alt="프로필 이미지"
                            src="https://images.unsplash.com/photo-1575715290166-71463c1244ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3578&q=80"
                          />
                        </div>
                      </div>
                      <span> myxxjun</span>
                    </div>
                  </li>
                  <li>
                    <div className="profile-container">
                      <div className="profile-wrapper">
                        <div className="profile-gradation-animate"></div>
                        <div className="profile__image-wrapper">
                          <div className="profile__image-small-wrapper"></div>
                          <img
                            className="profile__image"
                            alt="프로필 이미지"
                            src="https://images.unsplash.com/photo-1575715290166-71463c1244ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3578&q=80"
                          />
                        </div>
                      </div>
                      <span> myxxjun</span>
                    </div>
                  </li>
                </ul>
              </div>
              <section className="contents">
                <header className="contents__header">
                  <div>
                    <img
                      className="contents__profile-image"
                      alt="계정 프로필사진"
                      src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                    />
                    <span>hey_css</span>
                  </div>
                  <i className="fas fa-ellipsis-h"></i>
                </header>
                <article>
                  <img
                    className="contents__image"
                    alt="피드 이미지"
                    src="https://images.unsplash.com/photo-1530018352490-c6eef07fd7e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=961&q=80"
                  />
                </article>
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
                  <Comments commentsList={this.state.commentsList} />
                </div>
                <article className="comment-input-container">
                  <div>
                    <i className="far fa-smile"></i>
                  </div>
                  <form
                    className="js-comment-form"
                    onSubmit={this.handleSubmit}
                  >
                    <input
                      onChange={this.handleinputarea}
                      value={this.state.inputValue}
                      className="js-comment-inputarea"
                      placeholder="댓글 달기..."
                    ></input>
                    <button
                      className="js-comment-button"
                      disabled={this.state.inputValue.length < 1}
                    >
                      게시
                    </button>
                  </form>
                </article>
              </section>
            </div>
            <section className="main-right">
              <div className="my-profile">
                <div>
                  <img
                    alt="마이프로필 사진"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  />
                  <b>myxxjun</b>
                </div>
                <button>전환</button>
              </div>
              <div className="suggest">
                <div className="suggest-header">
                  <span>회원님을 위한 추천</span>
                  <button>모두보기</button>
                </div>
                <ul>
                  <li>
                    <div className="suggest-profile">
                      <img
                        className="suggest-profile__img"
                        alt="프로필 사진"
                        src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      />
                      <div>
                        <b> dongjun2818</b>
                        <span>json.macho님 외 1명이 팔로우합니다</span>
                      </div>
                      <button>팔로우</button>
                    </div>
                  </li>
                  <li>
                    <div className="suggest-profile">
                      <img
                        className="suggest-profile__img"
                        alt="프로필 사진"
                        src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      />
                      <div>
                        <b> dongjun2818</b>
                        <span>json.macho님 외 1명이 팔로우합니다</span>
                      </div>
                      <button>팔로우</button>
                    </div>
                  </li>
                  <li>
                    <div className="suggest-profile">
                      <img
                        className="suggest-profile__img"
                        alt="프로필 사진"
                        src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      />
                      <div>
                        <b> dongjun2818</b>
                        <span>json.macho님 외 1명이 팔로우합니다</span>
                      </div>

                      <button>팔로우</button>
                    </div>
                  </li>
                  <li>
                    <div className="suggest-profile">
                      <img
                        className="suggest-profile__img"
                        alt="프로필 사진"
                        src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      />
                      <div>
                        <b> dongjun2818</b>
                        <span>json.macho님 외 1명이 팔로우합니다</span>
                      </div>

                      <button>팔로우</button>
                    </div>
                  </li>
                  <li>
                    <div className="suggest-profile">
                      <img
                        className="suggest-profile__img"
                        alt="프로필 사진"
                        src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      />
                      <div>
                        <b> dongjun2818</b>
                        <span>json.macho님 외 1명이 팔로우합니다</span>
                      </div>

                      <button>팔로우</button>
                    </div>
                  </li>
                </ul>
              </div>
              <footer>
                소개 &#183; 도움말 &#183; 홍보 센터 &#183; API &#183; 채용 정보
                &#183; 개인정보처리방침 &#183;
                <br />
                약관 &#183; 위치 &#183; 인기 계정 &#183; 해시태그 &#183; 언어
                <div>
                  <span>&#169; 2021 WESTAGRAM FORM WECODE</span>
                </div>
              </footer>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
