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

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  goToMain = () => {
    this.props.history.push('/main-sun');
  };

  fetchRegister = () => {
    fetch('http://10.58.5.164:8000/user/Signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idValue,
        password: this.state.passwordValue,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
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
              name="idValue"
              type="text"
              value={idValue}
              onChange={this.handleInput}
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              name="passwordValue"
              type="password"
              value={passwordValue}
              onChange={this.handleInput}
              placeholder="비밀번호"
            />
            <button
              disabled={buttonActive ? false : true}
              onClick={this.fetchRegister}
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
