import React, { Component } from 'react';
import Contents from '../Main/Contents';
import Nav from '../../../Components/Nav';
import './Main.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      contentsData: [],
      resize: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/ContentsData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          contentsData: data,
        });
      });
    document.querySelector('.main-right').style.left = `${
      167 + window.innerWidth / 2
    }px`;
  }

  componentDidUpdate() {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      resize: `${167 + window.innerWidth / 2}px`,
    });
  }

  render() {
    const { contentsData } = this.state;
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
              {contentsData.length > 0 &&
                contentsData.map(data => <Contents contentsData={data} />)}
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
