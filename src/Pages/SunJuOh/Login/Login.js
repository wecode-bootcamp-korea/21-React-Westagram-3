import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      passwordValue: '',
    };
  }

  handleIdInput = event => {
    this.setState({
      idValue: event.target.value,
    });
  };

  handlePasswordInput = event => {
    this.setState({
      passwordValue: event.target.value,
    });
  };

  goToMain = () => {
    this.props.history.push('/main-sun');
  };

  render() {
    const { idValue, passwordValue } = this.state;
    const buttonActive = idValue.includes('@') && passwordValue.length >= 5;

    return (
      <div className="allContainer">
        <div className="login_container">
          <header>
            <p>westagram</p>
          </header>
          <main>
            <input
              type="text"
              value={idValue}
              onChange={this.handleIdInput}
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              type="password"
              value={passwordValue}
              onChange={this.handlePasswordInput}
              placeholder="비밀번호"
            />
            <button
              style={{ backgroundColor: buttonActive ? '#1182d9' : '#b2dffc' }}
              onClick={this.goToMain}
            >
              로그인
            </button>
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
