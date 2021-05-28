import React from 'react';
import './Login.scss';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/main-sun');
  };

  render() {
    return (
      <div className="allContainer">
        <div className="login_container">
          <header>
            <p>westagram</p>
          </header>
          <main>
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input type="password" placeholder="비밀번호" />
            <button onClick={this.goToMain} /*disabled*/>로그인</button>
          </main>
          <div className="findPassword">
            <a href="">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
